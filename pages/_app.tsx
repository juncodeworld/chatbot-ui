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
    }, 1800000); // 30 minutes in milliseconds

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
        <h1 style={{fontSize: '24px'}}> Ailogy.cn</h1>
        <h2 style={{fontSize: '20px'}}>联系站长部署私有帐号</h2>
        <p style={{fontSize: '18px', textAlign: 'center'}}>体验帐号：仅用于体验有限制</p>
        <p style={{fontSize: '18px', textAlign: 'center'}}>私有帐号：自有GPTAPI无限制</p>
        <p style={{fontSize: '18px', textAlign: 'center'}}>打赏继续体验，进AI资源群</p>
        <button onClick={handleClosePopup}></button>
      </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
