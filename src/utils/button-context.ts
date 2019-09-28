import { createContext } from "react";

export const ButtonContext = createContext<{
  value: number;
  onClick: () => void;
} | null>(null);
