import AsyncStorage from "@react-native-async-storage/async-storage";

// Use to store data in local storage

const storeData = async (key: string, value: any) => {
  try {
    const valueAsString = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueAsString);
    return true;
  } catch (error) {
    /* istanbul ignore next */

    console.error("Error to perform operation on AsyncStorage" + error);
  }
};

// Use to get store local data

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    /* istanbul ignore next */

    console.error("Error to perform operation on AsyncStorage" + error);
  }
};

// Remove local data storage

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    /* istanbul ignore next */

    console.error("error store in async storage" + error);
  }
};

// Clear all data from local storage

const clearAll = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    /* istanbul ignore next */

    console.error("Error to perform operation on AsyncStorage" + error);
  }
};

// Remove multiple data from local storage.

const removeMultiData = async (keys: string[]) => {
  try {
    return await AsyncStorage.multiRemove(keys);
  } catch (error) {
    /* istanbul ignore next */
    console.error("Error to perform error on AsyncStorage" + error);
  }
};

export default { storeData, getData, removeData, clearAll, removeMultiData };
