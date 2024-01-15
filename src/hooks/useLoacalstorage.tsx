import {useState} from "react";

export const useLocalstorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  }

  return [storedValue, setValue];
}