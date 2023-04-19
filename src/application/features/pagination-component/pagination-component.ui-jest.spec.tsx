/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Pagination from './pagination-component';
import { paginateArray } from '../../../domain/services/utils/utils';
import { generateMockPodcast } from '../../../infra/api/mock/mock-factory';

const pageSize = 24;
const goToNextPage = jest.fn();
const goToPreviousPage = jest.fn();
const paginatedProducts = paginateArray(
  [generateMockPodcast(), generateMockPodcast()],
  pageSize,
);
const currentPage = 1;

describe('Pagination component', () => {
  it('should be render', () => {
    const { getByTestId } = render(
      <Pagination
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        paginatedProducts={paginatedProducts}
        currentPage={currentPage}
      />,
    );
    expect(getByTestId('pagination-component')).toBeInTheDocument();
  });
});
