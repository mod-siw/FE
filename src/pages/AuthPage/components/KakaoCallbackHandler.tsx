import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KakaoLogin } from 'api/auth';

const KakaoCallbackHandler = () => {
  const navigate = useNavigate();

  const params = new URL(window.location.toString()).searchParams;
  const code = params.get('code');

  useEffect(() => {
    const getData = async () => {
      if (!code) {
        alert('카카오 인증 코드가 없습니다.');
        navigate('/login');
        return;
      }

      const response = await KakaoLogin(code, navigate);
    };

    getData();
  }, []);

  return <></>;
};

export default KakaoCallbackHandler;
