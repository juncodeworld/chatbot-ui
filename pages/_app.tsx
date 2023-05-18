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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000000); // 20 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(242, 242, 242, 0.6)',
          padding: '10px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          zIndex: '9999',
          width: '800px', 
          height: '220px',
          textAlign: 'center'
        }}
      >
        <h1 style={{fontSize: '24px'}}> www.Ailogy.cn</h1>
        <p style={{fontSize: '18px', textAlign: 'center'}}>体验帐号：仅用于体验有限制</p>
        <p style={{fontSize: '18px', textAlign: 'center'}}>私有帐号：自有官方API无限制</p>
        <p style={{ fontSize: '18px', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.location.href='http://ailogy.cn/archives/352'}>进入官网购买体验月卡</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input style={{ fontSize: '18px', textAlign: 'center', margin: '10px' }} placeholder="输入体验码" />
        <button style={{fontSize: '18px', textAlign: 'center'}} onClick={handleClosePopup}>确定</button>
      </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
