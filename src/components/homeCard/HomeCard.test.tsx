/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './HomeCard';

describe('Card Component', () => {
  const props = {
    title: 'iPhone 9',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    category: 'smartphones',
    brand: 'Apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    key: 1,
    id: 1,
  };

  test('renders card Apple', () => {
    it('Renders hello world', () => {
      render(<Card {...props} />, { wrapper: MemoryRouter });
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent('Apple');
    });
  });
});
