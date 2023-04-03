import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { CardData } from '../../types/types';

describe('Form', () => {
  const x = (card: CardData): void => {
    // eslint-disable-next-line no-alert
    alert(card);
    throw new Error('Function not implemented.');
  };
  test('Form', () => {
    render(<Form addCard={x} />);
    const homeElement = screen.getByText('Personal data');
    expect(homeElement).toBeInTheDocument();
  });
});
