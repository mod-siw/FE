import { http } from './http';

// GET: 메인 조회
export const GetMain = async (isDarkMode: boolean) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(`/home/${theme}/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// GET : 카테고리 목록 조회
export const GetCategoryList = async (
  isDarkMode: boolean,
  category: string,
  page: string,
) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(`/main/${theme}/list/${category}/?page=${page}`);
    console.log('카테고리 목록 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('카테고리 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 상세 조회
export const GetPostDetail = async (isDarkMode: boolean, post_id: number) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(`/main/${theme}/${post_id}/`);
    console.log('포스트 상세 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('포스트 상세 조회 실패', error);
    return Promise.reject(error);
  }
};
