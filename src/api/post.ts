import { http } from './http';

export const GetMain = async (isDarkMode: boolean) => {
  const theme = isDarkMode ? 'black' : 'white';
  try {
    const response = await http.get(`/home/${theme}/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GetCategoryList = async (category: string, page: number) => {
  try {
    const response = await http.get(`/main/black/list/${category}/?page=${page}`);
    console.log('카테고리 목록 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('카테고리 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

export const GetPostDetail = async (post_id: number) => {
  try {
    const response = await http.get(`/main/black/${post_id}/`);
    console.log('포스트 상세 조회 성공');
    console.log(response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('포스트 상세 조회 실패', error);
    return Promise.reject(error);
  }
};
