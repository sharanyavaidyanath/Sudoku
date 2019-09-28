import React, { createContext } from "react";

export const ButtonValueContext = createContext(0);
export const ButtonClickContext = createContext(() => {});

interface ButtonProps {
  value: number;
  onClick: () => void;
}

export const ButtonProvider: React.FC<ButtonProps> = ({
  children,
  value,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonValueContext.Provider value={value}>
      <ButtonClickContext.Provider value={onClick}>
        {children}
      </ButtonClickContext.Provider>
    </ButtonValueContext.Provider>
  );
};
