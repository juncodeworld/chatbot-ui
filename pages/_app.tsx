import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import React, { useEffect, useState } from 'react';

const queryClient = new QueryClient();
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1800000); // 30 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClosePopup = () => {
    if (password === '666518') { // 替换 correct_password 为实际的正确密码
      setShowPopup(false);
    } else {
      alert('密码错误');
    }
  };

  const popupContent = (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(242, 242, 242, 0.6)',
        padding: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        zIndex: '9999',
        width: '800px',
        height: '220px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '24px' }}>Ailogy.cn</h1>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        体验帐号：仅用于体验有限制
      </p>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        私有帐号：自有GPTAPI无限制
      </p>
      <p
        style={{
          fontSize: '18px',
          textAlign: 'center',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() =>
          (window.location.href = 'https://www.aiology.cn/gpt-monthly/')
        }
      >
        进入官网购买GPT月卡
      </p>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleClosePopup}></button>
    </div>
  );

  return (
    <React.Fragment>
      {showPopup && popupContent}
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default withTranslation('common')(MyApp);
