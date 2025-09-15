import axios, { AxiosError } from "axios";
import { Platform } from "react-native";
import LocalStorage from "utils/LocalStorage";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const createHttpClient = () => {
  const client = axios.create({
    headers: {
      "device-type": Platform.OS,
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  client.interceptors.request.use(async (config) => {
    const token = await LocalStorage.getData("ACCESS_TOKEN_KEY");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest: any = error.config;
      console.log("========>>>", error);
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axios(originalRequest);
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = await LocalStorage.getData("ACCESS_TOKEN_KEY");
          const refreshResponse = await axios.post("/auth/refresh", {
            refreshToken,
          });

          const { accessToken, refreshToken: newRefresh } =
            refreshResponse.data;
          await LocalStorage.storeData("ACCESS_TOKEN_KEY", accessToken);
          await LocalStorage.storeData("REFRESH_TOKEN_KEY", refreshToken);

          client.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          processQueue(null, accessToken);
          return client(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          await LocalStorage.clearAll();
          //  showErrorHandler({ message: 'Session expired. Please login again.' });
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
};
