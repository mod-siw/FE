import { http } from './http';

export const GetSearchList = async (keyword: string, page: number) => {
  try {
    const response = await http.get(
      `/main/black/search/?keyword=${keyword}&page=${page}`,
    );
    console.log('검색 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('검색 조회 실패', error);
    return Promise.reject(error);
  }
};

export const GetSearchHistory = async () => {
  try {
    const response = await http.get(`/home/black/search/history`);
    console.log('검색 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('검색 조회 실패', error);
    return Promise.reject(error);
  }
};
