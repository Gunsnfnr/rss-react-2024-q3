import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [userInput, setUserInput] = useState<string>(
    localStorage.getItem("gunsnfnr.swQuery") ?? "",
  );

  useEffect(() => {
    localStorage.setItem("gunsnfnr.swQuery", userInput.trim());
  });

  return [userInput, setUserInput];
};
