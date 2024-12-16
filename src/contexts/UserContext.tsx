import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { clearCookies } from 'api/http';

type UserContextType = {
  username: string | null;
  nickname: string | null;
  setUsername: (username: string | null) => void;
  setNickname: (nickname: string | null) => void;
  clearUserData: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const getLocalStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorageItem = (key: string, value: string | null) => {
  if (value) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(() => {
    const storedUsername = getLocalStorageItem('username');
    return storedUsername;
  });

  const [nickname, setNickname] = useState<string | null>(() => {
    const storedNickname = getLocalStorageItem('nickname');
    return storedNickname;
  });

  useEffect(() => {
    setLocalStorageItem('username', username);
  }, [username]);

  useEffect(() => {
    setLocalStorageItem('nickname', nickname);
  }, [nickname]);

  const clearUserData = () => {
    setUsername(null);
    setNickname(null);
    localStorage.removeItem('username');
    localStorage.removeItem('nickname');
    clearCookies();
  };

  return (
    <UserContext.Provider
      value={{ username, nickname, setUsername, setNickname, clearUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserProvider Error');
  }
  return context;
};
