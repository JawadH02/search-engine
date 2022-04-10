import { createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const inputContext = createContext(null);

export function InputProvider({ children }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = useCallback(
    (e) => {
      e.preventDefault();
      if (!input == "") {
        console.log("click", input);
        localStorage.setItem("inputValue", input);
        navigate("/search");
      }
    },
    [input]
  );
  return (
    <inputContext.Provider value={{ input, setInput, search }}>
      {children}
    </inputContext.Provider>
  );
}
