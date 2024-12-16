import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

// 요청 인터셉터
http.interceptors.request.use(
  (config) => {
    const token = getCookie('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getCookie('refresh_token');
      if (!refreshToken) {
        // Refresh token 없음
        console.warn('Refresh token이 없습니다.');
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/accounts/token/refresh/`,
          { refresh: refreshToken },
        );

        const newAccessToken = response.data.data.access_token;

        // Access Token 갱신
        setCookie('access_token', newAccessToken, 5 / 24);

        // 재요청
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return http(originalRequest);
      } catch (refreshError) {
        console.error('Access Token 갱신 실패:', refreshError);
        deleteCookie('access_token');
        deleteCookie('refresh_token');
        return Promise.reject(refreshError); // 강제 리다이렉션 제거
      }
    }

    return Promise.reject(error);
  },
);

// 쿠키
export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
};

export const clearCookies = () => {
  const cookiesToClear = ['access_token', 'refresh_token', 'id', 'nickname'];
  cookiesToClear.forEach((cookieName) => {
    deleteCookie(cookieName);
  });
};
