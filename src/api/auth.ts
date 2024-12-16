import axios from 'axios';
import { http } from './http';
import { getCookie } from './http';
import { setLocalStorageItem } from 'contexts/UserContext';

// POST : 회원가입
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
    const { id, access_token, refresh_token } = response.data.data;

    setLocalStorageItem('id', id.toString());
    setLocalStorageItem('nickname', nickname);
    console.log('회원가입 시 로컬스토리지에 저장된 닉네임:', nickname);

    // 토큰 저장
    const accessExpirationDate = new Date();
    accessExpirationDate.setHours(accessExpirationDate.getHours() + 5); // 5시간 후 만료
    const refreshExpirationDate = new Date();
    refreshExpirationDate.setDate(refreshExpirationDate.getDate() + 3); // 3일 후 만료

    document.cookie = `access_token=${access_token}; expires=${accessExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
    document.cookie = `refresh_token=${refresh_token}; expires=${refreshExpirationDate.toUTCString()}; path=/; SameSite=Lax`;

    return Promise.resolve(response.data);
  } catch (error) {
    console.error('회원가입 실패:', error);
    return Promise.reject(error);
  }
};

// POST : 로그인
export const PostLogIn = async (username: string, password: string) => {
  try {
    const response = await http.post('/accounts/login/', {
      username,
      password,
    });

    const { id, access_token, refresh_token, nickname } = response.data.data;

    setLocalStorageItem('id', id.toString());
    setLocalStorageItem('nickname', nickname);
    console.log('로그인 시 로컬스토리지에 저장된 아이디:', id);

    // 토큰 저장
    const accessExpirationDate = new Date();
    accessExpirationDate.setHours(accessExpirationDate.getHours() + 5); // 5시간 후 만료
    const refreshExpirationDate = new Date();
    refreshExpirationDate.setDate(refreshExpirationDate.getDate() + 3); // 3일 후 만료

    document.cookie = `access_token=${access_token}; expires=${accessExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
    document.cookie = `refresh_token=${refresh_token}; expires=${refreshExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
    console.log('token: ', document.cookie);

    return Promise.resolve(response);
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

// GET : 카카오 로그인
export const KakaoLogin = async (code: string) => {
  try {
    const response = await http.get(`/accounts/kakao/callback/`, {
      params: { code },
    });

    const { exist, nickname, username, id, access_token, refresh_token } =
      response.data.data;

    const accessExpirationDate = new Date();
    accessExpirationDate.setHours(accessExpirationDate.getHours() + 5);

    const refreshExpirationDate = new Date();
    refreshExpirationDate.setDate(refreshExpirationDate.getDate() + 3);

    if (exist) {
      // 이미 접속한 적 있는 경우
      setLocalStorageItem('id', id.toString());
      setLocalStorageItem('nickname', nickname);
      document.cookie = `access_token=${access_token}; expires=${accessExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
      document.cookie = `refresh_token=${refresh_token}; expires=${refreshExpirationDate.toUTCString()}; path=/; SameSite=Lax`;

      setLocalStorageItem('nickname', nickname);
      console.log('카카오 로그인 성공:', response.data);

      window.location.replace('/');
    } else {
      // 처음 접속한 경우
      setLocalStorageItem('username', username);
      window.location.replace('signup/kakao');
    }
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('카카오 로그인 실패:', error);
    return Promise.reject(error);
  }
};

// POST : 카카오 닉네임 입력
export const PostKakaoNickname = async (nickname: string, username: string) => {
  try {
    const response = await http.post('/accounts/kakao/nickname/', {
      nickname,
      username,
    });

    const { access_token, refresh_token } = response.data.data;

    // 토큰 저장
    const accessExpirationDate = new Date();
    accessExpirationDate.setHours(accessExpirationDate.getHours() + 5);

    const refreshExpirationDate = new Date();
    refreshExpirationDate.setDate(refreshExpirationDate.getDate() + 3);

    document.cookie = `access_token=${access_token}; expires=${accessExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
    document.cookie = `refresh_token=${refresh_token}; expires=${refreshExpirationDate.toUTCString()}; path=/; SameSite=Lax`;

    setLocalStorageItem('nickname', nickname);
    console.log('카카오 회원가입 시 로컬스토리지에 저장된 닉네임:', nickname);
    console.log('카카오 회원가입 완료:', response.data);

    return Promise.resolve(response.data);
  } catch (error) {
    console.error('카카오 회원가입 실패:', error);
    return Promise.reject(error);
  }
};

// POST : 로그아웃
export const PostLogout = async (): Promise<void> => {
  try {
    const accessToken = getCookie('access_token');
    const refreshToken = getCookie('refresh_token');

    if (!accessToken || !refreshToken) {
      console.error('토큰이 없습니다. 로그아웃 요청 불가');
      alert('로그아웃에 실패했습니다. 다시 로그인해 주세요.');
      return;
    }

    await http.post(
      '/accounts/logout/',
      { refresh_token: refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log('로그아웃 성공');
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

// POST: 액세스 토큰 재발급
export const PostToken = async (): Promise<string | null> => {
  const refreshToken = getCookie('refresh_token');
  if (!refreshToken) {
    alert('세션이 만료되었습니다. 다시 로그인해주세요.');
    window.location.replace('/login');
    return null;
  }

  try {
    const response = await http.post('/accounts/token/refresh/', {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.data.access_token;

    // Access Token 갱신
    const accessExpirationDate = new Date();
    accessExpirationDate.setHours(accessExpirationDate.getHours() + 5);

    document.cookie = `access_token=${newAccessToken}; expires=${accessExpirationDate.toUTCString()}; path=/; SameSite=Lax`;
    console.log('Access Token 갱신 후 쿠키 상태:', document.cookie);

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
