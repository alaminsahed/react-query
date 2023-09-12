import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import SuperHeroesPage from "./components/SuperHeroesPage";
import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import RQSuperHeroPage from './components/RQSuperHeroPage';
import ParallelQueriesPage from './components/ParallelQueriesPage';
import DependentQueries from './components/DependentQueries';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/parallel-queries'>Parallel Queries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='rq-dependent' element={<DependentQueries email="alaminsahed" />} />
            <Route path='parallel-queries' element={<ParallelQueriesPage />} />
            <Route path='rq-super-heroes/:heroId' element={<RQSuperHeroPage />} />
            <Route path='super-heroes' element={<SuperHeroesPage />} />
            <Route path='rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
