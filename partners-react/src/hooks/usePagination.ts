import { useState } from 'react';

interface UsePaginationProps {
  itemsPerPage: number;
  totalItems: number;
}

export const usePagination = ({ itemsPerPage, totalItems }: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calcula o índice do último item da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcula o índice do primeiro item da página atual
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Define a navegação para uma página específica
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  // Gera um array para os números de página
  const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => index + 1);

  return {
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    paginate,
    pageNumbers,
  };
};
