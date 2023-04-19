/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from './header-component';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('Header component', () => {
  it('should be render', () => {
    const { getByTestId } = render(<Header> HEADER </Header>);
    expect(getByTestId('header-component')).toBeInTheDocument();
  });

  it('should be render with children', () => {
    const { getByText } = render(<Header> HEADER </Header>);
    expect(getByText('HEADER')).toBeInTheDocument();
  });
});
