import { useState, useEffect } from 'react';

const getSessionStorageData = <T>(key: string, defaultValue: T): T => {
  const stored = sessionStorage.getItem(key);

  if (!stored) {
    return defaultValue;
  }

  return JSON.parse(stored);
};

export const useSessionStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(getSessionStorageData<T>(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
