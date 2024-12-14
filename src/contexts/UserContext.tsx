import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { clearCookies } from 'api/http';

type UserContextType = {
  username: string | null;
  nickname: string | null;
  setUsername: (username: string | null) => void;
  setNickname: (nickname: string | null) => void;
  clearUserData: () => void; // 로그아웃 시 초기화
};

const UserContext = createContext<UserContextType | null>(null);

// localStorage에서 데이터 가져오기
export const getLocalStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

// localStorage에 데이터 저장
export const setLocalStorageItem = (key: string, value: string | null) => {
  if (value) {
    localStorage.setItem(key, value);
  } else {
    localStorage.removeItem(key);
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // 초기 상태 복원
  const [username, setUsername] = useState<string | null>(() =>
    getLocalStorageItem('username'),
  );
  const [nickname, setNickname] = useState<string | null>(() =>
    getLocalStorageItem('nickname'),
  );

  // username & nickname 변경 시 localStorage 업데이트
  useEffect(() => {
    setLocalStorageItem('username', username);
  }, [username]);

  useEffect(() => {
    setLocalStorageItem('nickname', nickname);
  }, [nickname]);

  useEffect(() => {
    console.log('Restored nickname from localStorage:', getLocalStorageItem('nickname'));
  }, []);

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
