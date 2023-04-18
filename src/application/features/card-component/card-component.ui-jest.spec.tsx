/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from './card-component';

describe('WrapperTestingProvider', () => {
  it('should render children within AppProvider', () => {
    const children = <div>Test Children</div>;
    const { getByText, getByTestId} = render(
      <Card width='300px' height='200px'>{children}</Card>,
    );

    expect(getByText('Test Children')).toBeInTheDocument();
    expect(getByTestId('card-component')).toBeInTheDocument();


 
  });
});