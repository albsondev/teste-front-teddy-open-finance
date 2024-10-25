import axios from 'axios';

const API_BASE_URL = 'https://655cf25525b76d9884fe3153.mockapi.io/v1';

// Configuração padrão do Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funções de API para empresas externas
export const getExternalCompanies = async () => {
  try {
    const response = await api.get('/external-companies');
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar empresas:', error);
    throw error;
  }
};

export const addExternalCompany = async (company: { name: string, address: string }) => {
  try {
    const response = await api.post('/external-companies', company);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar empresa:', error);
    throw error;
  }
};

export const deleteExternalCompany = async (id: string) => {
  try {
    await api.delete(`/external-companies/${id}`);
  } catch (error) {
    console.error('Erro ao deletar empresa:', error);
    throw error;
  }
};
