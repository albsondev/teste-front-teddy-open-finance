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
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
              </li>
              <li>
                <a
                  href="http://localhost:4200/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:4200/add-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  Cadastrar Parceiro
                </a>
              </li>
              <li>
                <NavLink to="/external-companies" className={({ isActive }) => (isActive ? 'active' : '')}>Empresas Externas</NavLink>
              </li>
              <li>
                <a
                  href="http://localhost:4200/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
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
