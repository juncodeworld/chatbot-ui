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
    }, 600000); // 10 minutes in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    // 检查密码是否正确，这里假设密码为666
    if (password === '666') {
      setShowPopup(false);
    } else {
      alert('密码错误，请重新输入！');
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
            bottom: '0',
            left: '50%',
            transform: 'translate(-50%, 0px)',
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
          <h2 style={{fontSize: '20px'}}>联系站长部署私有帐号</h2>
          <p style={{fontSize: '18px', textAlign: 'center'}}>体验帐号：仅用于体验有限制</p>
          <p style={{fontSize: '18px', textAlign: 'center'}}>私有帐号：自有GPTAPI无限制</p>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button onClick={handlePasswordSubmit}>验证</button>
        </div>
      )}
    </div>
  );
}

export default appWithTranslation(MyApp);
