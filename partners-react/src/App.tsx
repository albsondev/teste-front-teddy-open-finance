import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import ExternalCompaniesPage from './pages/ExternalCompaniesPage/ExternalCompaniesPage';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>

          <nav>
            <ul>
              <li>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li>
                <a
                  href="http://localhost:4200/dashboard"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={window.location.href === 'http://localhost:4200/dashboard' ? 'active' : ''} 
                >
                  Dashboard
                </a>
              </li>
              <li>
                <NavLink to="http://localhost:4200/add-partner" target="_blank" rel="noopener noreferrer">Cadastrar Parceiro</NavLink>
              </li>
              <li>
                <NavLink to="/external-companies">Empresas Externas</NavLink>
              </li>
              <li>
                <a
                  href="http://localhost:4200/about"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={window.location.href === 'http://localhost:4200/dashboard' ? 'active' : ''} 
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ExternalCompaniesPage />} />
            <Route path="/external-companies" element={<ExternalCompaniesPage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Footer</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
