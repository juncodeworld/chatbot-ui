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
    }, 100000); // 20 minutes in milliseconds

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
           backgroundColor: 'gray', // 将此处的值改为 gray
           padding: '10px',
           boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
           zIndex: '9999',
           width: '600px', 
           height: '170px',
           textAlign: 'center'
         }}
       >
        <h1 style={{fontSize: '24px'}}> 通知：AI助理已更新！</h1>
        <h2 style={{fontSize: '20px'}}>请前往Ailogy官网注册体验</h2>
        <p style={{fontSize: '18px', textAlign: 'center'}}>2023-05－15</p>
        <p style={{ fontSize: '18px', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.location.href='http://ailogy.cn/'}>进入官网</p>
       <button style={{fontSize: '18px', textAlign: 'center'}} onClick={handleClosePopup}>好的</button>
      </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
