/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { AppProvider, useAppContext } from './user-context-provider';
beforeEach(() => {
  localStorage.setItem('user', '');
});
describe('AppContext', () => {
  it('exports AppProvider', () => {
    expect(AppProvider).toBeDefined();
  });

  it('exports useAppContext', () => {
    expect(useAppContext).toBeDefined();
  });

  it('stores user in localStorage and provides it to child components', () => {
    const TestComponent = () => {
      const { user } = useAppContext();
      return <div data-testid="user">{user}</div>;
    };

    localStorage.setItem('user', 'test-user');
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>,
    );

    expect(screen.getByTestId('user')).toHaveTextContent('test-user');
  });
});
