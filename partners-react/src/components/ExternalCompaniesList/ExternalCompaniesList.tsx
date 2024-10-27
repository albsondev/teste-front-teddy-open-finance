import { ExternalCompany } from '../../types';
import { usePagination } from '../../hooks/usePagination';
import './ExternalCompaniesList.scss';

type ExternalCompaniesListProps = {
  companies: ExternalCompany[];
  onDeleteCompany: (id: string) => Promise<void>;
};

const ExternalCompaniesList: React.FC<ExternalCompaniesListProps> = ({ companies, onDeleteCompany }) => {
  const itemsPerPage = 10;

  const {
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    paginate,
    pageNumbers,
  } = usePagination({
    itemsPerPage,
    totalItems: companies.length,
  });

  const currentCompanies = companies.slice(indexOfFirstItem, indexOfLastItem);
  const isEmpty = companies.length === 0;

  return (
    <div className="external-companies-list">
      <h2>Empresas Externas</h2>
      
      {isEmpty ? (
        <p className="empty-state">Nenhuma empresa cadastrada no momento.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentCompanies.map((company) => (
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

          <div className="pagination">
            {pageNumbers.map(page => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExternalCompaniesList;
