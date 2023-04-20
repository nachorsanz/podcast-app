/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EpisodePage from './Episode';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(() => {}),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useLocation: jest.fn(() => {
      return {
        state: {
          name: 'podcast1',
        },
      };
    }),
  };
});
describe('Episode Page', () => {
  it.skip('should be render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <EpisodePage />
      </MemoryRouter>,
    );

    expect(getByTestId('episode-page')).toBeInTheDocument();
  });
});
