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
    }, 120000); // 1 minutes in milliseconds

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
          bottom: '0',
          left: '50%',
          transform: 'translate(0%, 0px)',
          backgroundColor: 'rgba(242, 242, 242, 0.6)',
          padding: '10px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          zIndex: '9999',
          width: '800px', // 将宽度设置为屏幕宽度
          height: '220px',
          textAlign: 'center'
        }}
      >
        <h1 style={{fontSize: '26px'}}>联系站长部署私有帐号 Ailogy</h1>
        <p style={{fontSize: '14px', textAlign: 'center'}}>体验帐号：仅用于体验有限制</p>
        <p style={{fontSize: '14px', textAlign: 'center'}}>私有帐号：GPT API无限制</p>
        <button onClick={handleClosePopup}></button>
      </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
