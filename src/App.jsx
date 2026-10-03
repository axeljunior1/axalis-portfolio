import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import SolutionPage from './pages/SolutionPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import { solutions } from './data/solutions.js';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {solutions.map((solution) => (
            <Route
              key={solution.slug}
              path={`/solutions/${solution.slug}`}
              element={<SolutionPage solution={solution} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
