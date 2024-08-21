import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from '../Utils/Loader/Loader';
import { Background } from './Background/Background';

const SharedLayout = () => {
  return (
    <>
      <Background>
      <Header />
      <Suspense fallback = {Loader}>
        <Outlet />
      </Suspense>
      <Footer/>
      </Background>
      
    </>
  );
};

export default SharedLayout;
