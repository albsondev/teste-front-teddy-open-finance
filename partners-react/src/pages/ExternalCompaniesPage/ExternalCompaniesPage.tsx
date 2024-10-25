import React, { useEffect, useState } from 'react';
import ExternalCompanyForm from '../../components/ExternalCompanyForm/ExternalCompanyForm';
import ExternalCompaniesList from '../../components/ExternalCompaniesList/ExternalCompaniesList';
import { ExternalCompany } from '../../types';
import { getExternalCompanies, deleteExternalCompany } from '../../services/api';
import './ExternalCompaniesPage.scss';

const ExternalCompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<ExternalCompany[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getExternalCompanies();
        setCompanies(data);
      } catch (error) {
        console.error('Erro ao carregar empresas:', error);
      }
    };
    fetchCompanies();
  }, []);

  const handleAddCompany = (company: ExternalCompany) => {
    setCompanies((prevCompanies) => [...prevCompanies, company]);
  };

  const handleDeleteCompany = async (id: string) => {
    try {
      await deleteExternalCompany(id);
      setCompanies((prevCompanies) => prevCompanies.filter(company => company.id !== id));
    } catch (error) {
      console.error('Erro ao deletar empresa:', error);
    }
  };

  return (
    <div className="external-companies-page">
      <h2>Empresas Externas</h2>
      <ExternalCompanyForm onAddCompany={handleAddCompany} />
      <ExternalCompaniesList companies={companies} onDeleteCompany={handleDeleteCompany} />
    </div>
  );
};

export default ExternalCompaniesPage;
