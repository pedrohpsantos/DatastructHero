// src/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

// Hook genérico para sincronizar estado com localStorage
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`[useLocalStorage] Erro ao ler chave "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`[useLocalStorage] Erro ao salvar chave "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
