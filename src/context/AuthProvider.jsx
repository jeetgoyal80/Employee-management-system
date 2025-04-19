import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userdata,setUserdata] = useState(null);
    useEffect(() => {
        const data = getLocalStorage();
        setUserdata(data);
        setLocalStorage();
      

    }, [])
  return (
    <AuthContext.Provider value={userdata }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
