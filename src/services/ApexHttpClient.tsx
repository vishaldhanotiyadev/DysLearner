import { createHttpClient } from "../services/HttpClient";

const client = createHttpClient();
export const ApexHttpClient = {
  get: (url: string, config = {}) => client.get(url, config),
  post: (url: string, data: any, config = {}) => client.post(url, data, config),
  put: (url: string, data: any, config = {}) => client.put(url, data, config),
  delete: (url: string, config = {}) => client.delete(url, config),
  postForm: (url: string, data: any, config = {}) =>
    client.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...(config as any).headers,
      },
      ...config,
    }),
};
