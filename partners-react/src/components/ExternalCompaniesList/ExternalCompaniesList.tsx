import React from 'react';
import { ExternalCompaniesListProps } from '../../types';
import './ExternalCompaniesList.scss';

const ExternalCompaniesList: React.FC<ExternalCompaniesListProps> = ({ companies, onDeleteCompany }) => {
  return (
    <div className="external-companies-list">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>
                <button onClick={() => onDeleteCompany(company.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExternalCompaniesList;
