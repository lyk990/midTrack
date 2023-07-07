import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key: string, value: string) => {
  // 底层方法建议用try catch捕获
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

const load = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const remove = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

const clear = async () => {
  try {
    AsyncStorage.clear();
  } catch (error) {
    console.error(error);
  }
};

export {save, load, remove, clear};
