/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from './card-component';

describe('Card component', () => {
  it('should be render', () => {
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <Card width="300px" height="200px">
        {children}
      </Card>,
    );

    expect(getByTestId('card-component')).toBeInTheDocument();
  });
  it('should render children with text', () => {
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <Card width="300px" height="200px">
        {children}
      </Card>,
    );

    expect(getByText('Test Children')).toBeInTheDocument();
  });
});
