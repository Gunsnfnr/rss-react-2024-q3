import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = (initialValue: string): [string, Dispatch<SetStateAction<string>>] => {
  const [userInput, setUserInput] = useState<string>(localStorage.getItem('gunsnfnr.swQuery') ?? initialValue);

  useEffect(() => {
    localStorage.setItem('gunsnfnr.swQuery', userInput.trim());
  });

  return [userInput, setUserInput];
};
