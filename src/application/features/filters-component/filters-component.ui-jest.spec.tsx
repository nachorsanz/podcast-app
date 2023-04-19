/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Filters from './filters-component';

describe('Filters component', () => {
  const handleFilter = jest.fn();

  it('should be render', () => {
    const { getByTestId } = render(
      <Filters total={23} filter={'test'} handleFilter={handleFilter} />,
    );
    expect(getByTestId('filters-component')).toBeInTheDocument();
  });
});
