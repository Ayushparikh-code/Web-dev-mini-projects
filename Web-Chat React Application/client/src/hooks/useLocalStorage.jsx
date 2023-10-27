import { useState, useEffect } from "react";

const PREFIX = "whatsapp-clone-";
// so that localstorage from different projects do not conflict

// initialValue will be passed to useState hook
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      // invoking the function if useState hook is used as function
      return initialValue();
    } else {
      return initialValue;
    }
  });

  //this hook will update the value in local storage if either the prefixed key or the value changes
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
