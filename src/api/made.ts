import { http } from './http';
import { FormDataType } from 'pages/MadePage/MadeFormContext';

// POST: 만들기 페이지
export const PostMadeData = async (data: FormDataType) => {
  try {
    const formData = new FormData();
    formData.append('category', data.category);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('information', data.information);
    formData.append('color', data.color.toString());
    formData.append('frame', data.frame);

    if (data.img instanceof File) {
      formData.append('img', data.img);
    }

    const response = await http.post('/home/black/', formData);

    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('데이터 전송 실패', error);
    return Promise.reject(error);
  }
};
