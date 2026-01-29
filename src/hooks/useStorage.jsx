import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key) => {
    try {
      let passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (err) {
      console.log("Erro ao buscar", err);
      return [];
    }
  };

  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);

      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (err) {
      console.log("Erro ao salvar ", err);
    }
  };

  const removeItem = async (key, value) => {
    try {
      let passwords = await getItem(key);

      let myPasswords = passwords.filter((passwords) => {
        return passwords !== value;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
      return myPasswords;
    } catch (err) {
      console.log("Erro ao deletar", err);
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
