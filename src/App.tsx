import { Sidebar } from './components/sidebar/sidebar.tsx';
import { AppRoutes } from './routes/routes.tsx';
import './global.sass';
import { setTheme } from './themes/setup.ts';
import { useSingleEffect } from './hooks/singleEffect.tsx';

export const App = () => {
  useSingleEffect(() => {
    setTheme();
  }, []);

  return (
    <div className='container'>
      <Sidebar />
      <AppRoutes />
    </div>
  );
};
