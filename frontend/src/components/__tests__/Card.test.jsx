import React from 'react';
import { render } from '@testing-library/react';
import Card from '../atoms/Card';

describe('Card component', () => {
  it('renders with the props', () => {
    const props = {
      income: '$1000',
      label: 'Monthly Income',
    };

    const { getByText, getByTestId } = render(<Card {...props} />);

    const cardElement = getByTestId('card');
    expect(cardElement).toHaveClass(props.bg);


    const incomeElement = getByText(props.income);
    const labelElement = getByText(props.label);
    expect(incomeElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();

  });
});
