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
    }, 600000); // 10 minutes in milliseconds

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
          bottom: '50px',
          left: '50%',
          transform: 'translate(-50%, 0)',
          backgroundColor: '#eee',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          zIndex: '9999',
        }}
      >
        <h1>欢迎体验 GPT AI ！</h1>
        <p>请加站长微信进群交流</p>
        <p>体验码：</p>
        <input type="text" placeholder="请输入体验码" />
        <button onClick={handleClosePopup}>确定</button>
      </div>
    )}
  </div>
);


export default appWithTranslation(MyApp);
