import { Sidebar } from './components/sidebar/sidebar.tsx';
import { AppRoutes } from './routes/routes.tsx';
import './global.sass';
import { setTheme } from './themes/setup.ts';
import { useSingleEffect } from './hooks/singleEffect.tsx';
import { useState } from 'react';
import { Preloader } from './components/preloader/preloader.tsx';

export const App = () => {
  const [isShowPreloader, setIsShowPreloader] = useState(false);

  const showPreloader = () => {
    setIsShowPreloader(true);
    setTimeout(() => {
      setIsShowPreloader(false);
    }, 4000);
  };

  useSingleEffect(() => {
    showPreloader();
    setTheme();
  }, []);

  return (
    <div className='container'>
      {isShowPreloader && <Preloader />}
      <Sidebar />
      <AppRoutes />
    </div>
  );
};
