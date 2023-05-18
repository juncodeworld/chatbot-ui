import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import React, { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] });

const handleClosePopup = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.value) {
    setShowPopup(false);
  }
};




function MyApp({ Component, pageProps }: AppProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1200000); // 20 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const queryClient = new QueryClient();

  return (
 <div className="popup">
  {showPopup && (
    <div className="popup-inner">
      <h1 style={{fontSize: '24px'}}> www.Ailogy.cn</h1>
      <h2 style={{fontSize: '20px'}}></h2>
      <p style={{fontSize: '18px', textAlign: 'center'}}>体验帐号：仅用于体验有限制</p>
      <p style={{fontSize: '18px', textAlign: 'center'}}>私有帐号：自有官方API无限制</p>
      <p style={{ fontSize: '18px', textAlign: 'center', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => window.location.href='http://ailogy.cn/archives/352'}>进入官网购买体验月卡</p>
      <input type="text" style={{ fontSize: '18px', textAlign: 'center' }} placeholder="输入体验码" onChange={handleClosePopup} />
    </div>
  )}
</div>
  );
}

export default appWithTranslation(MyApp);
