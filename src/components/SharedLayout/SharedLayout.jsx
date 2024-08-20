import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Loader } from '../Utils/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback = {Loader}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default SharedLayout;
