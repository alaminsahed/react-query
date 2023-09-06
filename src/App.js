import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import SuperHeroesPage from "./components/SuperHeroesPage";
import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
            </ul>
          </nav>
          <Routes>
            <Route path='super-heroes' element={<SuperHeroesPage />} />
            <Route path='rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
