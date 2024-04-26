import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // При завантаженні компоненту, перевіряємо, чи є дані у local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLogin(true);
    }
  }, []);

  const login = (userData) => {
    try {
      if (userData) {
        setUser(userData);
        setIsLogin(true);
     
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      console.log("Error with user login");
      console.log(error);
    }
    console.log(userData);
  };

  const logout = () => {
    setUser(null);
    setIsLogin(false);
    
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
