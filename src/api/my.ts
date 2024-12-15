import axios from 'axios';
import { http } from './http';
import { getCookie } from './http';

// GET : 화이트 마이페이지
export const GetMyWhite = async () => {
  try {
    const accessToken = getCookie('access_token');

    if (!accessToken) {
      throw new Error('(화이트모드) 토큰이 올바르지 않습니다.');
    }
    const response = await http.get('/main/white/mypage', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('화이트모드 마이페이지 로드 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('화이트모드 마이페이지 로드 실패:', error);
    return Promise.reject(error);
  }
};

// GET : 블랙 마이페이지
export const GetMyBlack = async () => {
  try {
    const accessToken = getCookie('access_token');

    if (!accessToken) {
      throw new Error('(다크모드) 토큰이 올바르지 않습니다.');
    }
    const response = await http.get('/main/black/mypage', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('다크모드 마이페이지 로드 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('다크모드 마이페이지 로드 실패:', error);
    return Promise.reject(error);
  }
};
