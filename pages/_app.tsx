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
    }, 60000); // 1 minutes in milliseconds

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
          transform: 'translate(-30%, -20px)',
          backgroundColor: 'rgba(242, 242, 242, 0.6)',
          padding: '20px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
          zIndex: '9999',
          width: '800px',
          height: '460px',
        }}
      >
        <h1> 联系站长继续 Ailogy.cn </h1>
        <p> </p>
        <button onClick={handleClosePopup}> </button>
      </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
