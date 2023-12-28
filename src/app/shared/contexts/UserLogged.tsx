import { createContext, useCallback, useEffect, useState } from "react";

interface IUserLoggedContextData {
  nameUser: string;
  logout: () => void;
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
  const [name, setName] = useState("");
  const handleLogout = useCallback(() => {
    console.log("logout executed");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setName("Leonardo");
    }, 100);
  }, [name]);

  return (
    <UserLoggedContext.Provider
      value={{ nameUser: name, logout: handleLogout }}
    >
      {children}
    </UserLoggedContext.Provider>
  );
};
