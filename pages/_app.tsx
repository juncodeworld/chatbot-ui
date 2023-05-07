import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import React, { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 60000); // 30 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Check password and close popup if correct
    if (password === '666') {
      setShowPopup(false);
    } else {
      alert('密码不正确，请重试。');
    }
  };

  const queryClient = new QueryClient();

  return (
    <div className={inter.className}>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            zIndex: '9999',
          }}
        >
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>欢迎访问 Ailogy GPT AI </h2>
          <p style={{ color: '#fff', marginBottom: '20px' }}>请联系站长获取访问密码</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="password" style={{ color: '#fff', marginBottom: '20px' }}>请输入密码：</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ marginRight: '10px' }} />
            <button type="submit">提交</button>
          </form>
          <button onClick={handleClosePopup} style={{ marginTop: '20px' }}>关闭</button>
        </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
