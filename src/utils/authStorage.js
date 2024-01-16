import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const key = `${this.namespace}:accessToken`;
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error('Failed to fetch access token from AsyncStorage', e);
    }
  }

  async setAccessToken(accessToken) {
    const key = `${this.namespace}:accessToken`;
    try {
      await AsyncStorage.setItem(key, accessToken);
    } catch (e) {
      console.error('Failed to store access token in AsyncStorage', e);
    }
  }

  async removeAccessToken() {
    const key = `${this.namespace}:accessToken`;
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Failed to remove access token from AsyncStorage', e);
    }
  }
}

export default AuthStorage;
