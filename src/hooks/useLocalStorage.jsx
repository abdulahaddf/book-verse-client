

const useLocalStorage = () => {
  const getValue = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const setValue = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getValue, setValue };
};

export default useLocalStorage;
