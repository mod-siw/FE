import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetKakaoCallback } from 'api/auth';

const KakaoCallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (!code) {
        alert('카카오 인증 코드가 없습니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await GetKakaoCallback(code);

        if (response.data.exist) {
          // 기존 회원 => 로그인 완료
          alert('로그인 성공!');
          navigate('/');
        } else {
          // 신규 회원 => 닉네임 설정 페이지로 이동
          localStorage.setItem('kakao_username', response.data.username);
          navigate('signup/kakao');
        }
      } catch (error) {
        console.error('카카오 로그인 콜백 처리 실패:', error);
        alert('카카오 로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
        navigate('/login');
      }
    };

    handleKakaoCallback();
  }, [navigate]);

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallbackHandler;
