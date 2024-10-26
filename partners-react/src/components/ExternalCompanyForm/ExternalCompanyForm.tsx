import React, { useState } from 'react';
import { addExternalCompany } from '../../services/api';
import { ExternalCompany } from '../../types';
import './ExternalCompanyForm.scss';

interface ExternalCompanyFormProps {
  onAddCompany: (company: ExternalCompany) => void;
}

const ExternalCompanyForm: React.FC<ExternalCompanyFormProps> = ({ onAddCompany }) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newCompany = await addExternalCompany({ name, address });
      onAddCompany(newCompany);
      setName('');
      setAddress('');
    } catch (error) {
      console.error('Erro ao cadastrar empresa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="external-company-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome da Empresa"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Endereço"
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default ExternalCompanyForm;
