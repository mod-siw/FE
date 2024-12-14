import axios from 'axios';
import { http } from './http';
import { getCookie, setCookie } from './http';
import { setLocalStorageItem } from 'contexts/UserContext';

// POST: 회원가입
export const PostSignUp = async (
  username: string,
  password: string,
  nickname: string,
) => {
  try {
    const response = await http.post('/accounts/signup/', {
      username,
      password,
      nickname,
    });
    const { access_token, refresh_token } = response.data.data;
    setLocalStorageItem('nickname', nickname);
    console.log('회원가입 시 로컬스토리지에 저장된 닉네임:', nickname);

    setCookie('access_token', access_token, 5 / 24);
    setCookie('refresh_token', refresh_token, 3);

    return Promise.resolve(response.data);
  } catch (error) {
    console.error('회원가입 실패:', error);
    return Promise.reject(error);
  }
};

// POST: 로그인
export const PostLogIn = async (username: string, password: string) => {
  try {
    const response = await http.post('/accounts/login/', {
      username,
      password,
    });
    console.log('로그인 API 응답 데이터:', response.data);

    const { access_token, refresh_token, nickname } = response.data.data;
    setLocalStorageItem('nickname', nickname);
    console.log('로그인 시 로컬스토리지에 저장된 닉네임:', nickname);

    // 토큰 저장
    setCookie('access_token', access_token, 5 / 24); // 5시간
    setCookie('refresh_token', refresh_token, 3); // 3일

    return Promise.resolve(response.data);
  } catch (error) {
    console.error('로그인 실패:', error);
    return Promise.reject(error);
  }
};

// POST : 아이디 중복 확인
export const PostDuplicateId = async (username: string) => {
  try {
    const response = await http.post('/accounts/duplicate/', {
      username: username,
    });
    return Promise.resolve(response.data.data.duplicate);
  } catch (error) {
    console.error('중복확인 실패', error);
    return Promise.reject(error);
  }
};

// 로그아웃
export const PostLogout = async (): Promise<void> => {
  try {
    await http.post('/accounts/logout/');
  } catch (error) {
    console.error('로그아웃 요청 실패:', error);
  }
};

// Access Token 갱신
export const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = getCookie('refresh_token');
  if (!refreshToken) {
    window.location.replace('/login'); // 리다이렉트
    return null;
  }

  try {
    const response = await http.post('/accounts/token/refresh/', {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.data.access_token;

    // Access Token 갱신
    setCookie('access_token', newAccessToken, 5 / 24); // 5시간
    return newAccessToken;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Access Token 갱신 실패:', error.response?.data || error.message);
    } else {
      console.error('알 수 없는 오류:', error);
    }
    window.location.replace('/login'); // 리다이렉트
    return null;
  }
};
