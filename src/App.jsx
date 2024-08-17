import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutMePage } from './pages/AboutMePage/AboutMePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
