import React, { ReactNode, createContext, useContext, useState } from "react";
import { ClientGridProps } from "../services/Interfaces";

interface DashboardContextInterface {
    password: string | undefined;
    clientId: number | undefined;
    clientGridFilterParams: ClientGridProps;
    setPassword: (password: string) => void;
    setClientId: (clientId: number) => void;
    setClientGridFilterParams: (clientGridFilterParams: ClientGridProps) => void;
}

const Context = createContext<DashboardContextInterface | undefined>(undefined);

interface DashboardContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<DashboardContextProviderProps> = ({ children }) => {
    const [password, setPassword] = useState<string>('');
    const [clientId, setClientId] = useState<number>();
    const [clientGridFilterParams, setClientGridFilterParams] = useState<ClientGridProps>({
        idClient: undefined,
        dateFrom: '2021-03-01',
        dateTo: '2022-03-25'
    });

    return (
      <Context.Provider value={{ 
        password, 
        clientId, 
        clientGridFilterParams,
        setPassword, 
        setClientId, 
        setClientGridFilterParams,
      }}>
        {children}
      </Context.Provider>
    );
  };
  
  export const useDashboardContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useContext debe ser utilizado dentro de un ContextProvider');
    }
    return context;
  };