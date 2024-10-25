export interface ExternalCompany {
    id: string;
    name: string;
    address: string;
  }
  
  export interface ExternalCompaniesListProps {
    companies: ExternalCompany[];
    onDeleteCompany: (id: string) => void;
  }