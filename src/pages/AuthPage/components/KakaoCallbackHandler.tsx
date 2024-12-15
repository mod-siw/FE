import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KakaoLogin } from 'api/auth';

const KakaoCallbackHandler = () => {
  const navigate = useNavigate();

  const getData = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (!code) {
      alert('카카오 인증 코드가 없습니다.');
      navigate('/login');
      return;
    }

    const response = await KakaoLogin(code);
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default KakaoCallbackHandler;
