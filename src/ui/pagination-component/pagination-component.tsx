import { css } from '@emotion/react';
import { Podcast } from '../../domain/podcast';

interface PaginationProps {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  paginatedProducts: Podcast[][];
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  goToPreviousPage,
  goToNextPage,
  paginatedProducts,
  currentPage,
}) => {
  return (
    <div css={paginationContainer}>
      <button
        css={paginationButton}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        css={paginationButton}
        onClick={goToNextPage}
        disabled={currentPage === paginatedProducts.length}
      >
        Siguiente
      </button>
    </div>
  );
};

const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const paginationButton = css`
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  margin: 0 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0062cc;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export default Pagination;
