import { createContext } from "react";

interface IUserLoggedContextData {
  nameUser: string;
}

export const UserLoggedContext = createContext<IUserLoggedContextData>(
  {} as IUserLoggedContextData
);

interface IUserLoggedProviderProps {
  children: React.ReactNode;
}

export const UserLoggedProvider: React.FC<IUserLoggedProviderProps> = ({
  children,
}) => {
  return (
    <UserLoggedContext.Provider value={{ nameUser: "Leonardo" }}>
      {children}
    </UserLoggedContext.Provider>
  );
};
