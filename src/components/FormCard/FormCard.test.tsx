import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

describe('FormCard', () => {
  const props = {
    name: 'John',
    birthday: '1998-28-05',
    country: 'Germany',
    vehicle: ['car'],
    gender: 'male',
    photo: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    rules: true,
  };
  test('FormCard text', () => {
    render(<FormCard card={props} />);
    const homeElement = screen.getByText('Birthday:');
    expect(homeElement).toBeInTheDocument();
  });
});
