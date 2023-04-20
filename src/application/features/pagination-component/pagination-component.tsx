import { css } from '@emotion/react';
import { PodcastType } from '../../../domain/models/podcast';
import { MAIN_BLUE, MAIN_WHITE, SECONDARY_BLUE } from '../../../domain/services/constants/constants';

const paginationContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const paginationButtonStyle = css`
  background-color: ${MAIN_BLUE};
  color: ${MAIN_WHITE};
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
    background-color: ${SECONDARY_BLUE};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;
interface PaginationProps {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  paginatedProducts: PodcastType[][];
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  goToPreviousPage,
  goToNextPage,
  paginatedProducts,
  currentPage,
}) => {
  return (
    <div css={paginationContainerStyle} data-testid="pagination-component">
      <button
        css={paginationButtonStyle}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        css={paginationButtonStyle}
        onClick={goToNextPage}
        disabled={currentPage === paginatedProducts.length}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
