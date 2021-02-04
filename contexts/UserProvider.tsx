import { useQuery } from '@apollo/client';
import Loading from '@components/Loading';
import { me } from '@graphql/Auth/queries.gql';
import { createContext, useContext, useState } from 'react';

export type UsuarioContextType = {
  usuario?: any;
  loading?: boolean;
  setUsuario?: CallableFunction;
};

export const UsuarioContext = createContext<UsuarioContextType>({});

const UsuarioProvider = ({ children }) => {
  const [data, setUsuario] = useState(null);

  return (
    <UsuarioContext.Provider value={{ usuario: data, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;

export const useUsuario = () => {
  const data = useContext(UsuarioContext);

  return data;
};
