import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Book = lazy(() => import('pages/Book'));
const Thema = lazy(() => import('pages/Thema'));
const Words = lazy(() => import('pages/Words'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:bookId" element={<Book />} />
        <Route path="/:bookId/:themId" element={<Thema />} />
        <Route path="/:bookId/:themId/:wordId" element={<Words />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
