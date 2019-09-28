import React, { createContext, useContext } from "react";

const ButtonValueContext = createContext(0);
const ButtonClickContext = createContext(() => {});

export const useButtonValue = () => {
  const value: number = useContext(ButtonValueContext);
  return value;
};

export const useButtonClick = () => {
  const value: () => void = useContext(ButtonClickContext);
  return value;
};

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
