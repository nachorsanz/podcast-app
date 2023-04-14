/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import WrapperTestingProvider from './wrapper-testing-provider';

describe('WrapperTestingProvider', () => {
  it('should render children within AppProvider', () => {
    // Arrange
    const children = <div>Test Children</div>;

    // Act
    const { getByText } = render(
      <WrapperTestingProvider>{children}</WrapperTestingProvider>,
    );
    const renderedText = getByText('Test Children');

    // Assert
    expect(renderedText).toBeInTheDocument();
  });
});
