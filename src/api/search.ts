import { http } from './http';

// GET : 검색 목록 조회
export const GetSearchList = async (
  isDarkMode: boolean,
  keyword: string,
  pageParam: number,
) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(
      `/main/${theme}/search/?keyword=${keyword}&page=${pageParam}`,
    );
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('검색 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 검색 기록 조회
export const GetSearchHistory = async (isDarkMode: boolean) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(`/home/${theme}/search/history`);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
