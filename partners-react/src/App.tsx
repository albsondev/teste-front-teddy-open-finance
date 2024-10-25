import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExternalCompaniesPage from './pages/ExternalCompaniesPage/ExternalCompaniesPage';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Gestão de Empresas Externas</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/external-companies">Empresas Externas</Link>
              </li>
              <li>
                <a href="http://localhost:4200/dashboard" target="_blank" rel="noopener noreferrer">Dashboard Angular</a>
              </li>
              <li>
                <a href="http://localhost:4200/add-partner" target="_blank" rel="noopener noreferrer">Cadastrar Parceiro (Angular)</a>
              </li>
              {/* Adicione outros links externos para o Angular conforme necessário */}
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
          <p>© 2023 Sua Empresa</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
