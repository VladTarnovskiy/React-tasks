import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Not found page', () => {
  test('Not found', () => {
    render(<NotFound />);
    const homeElement = screen.getByText('The page you are looking for not found!');
    expect(homeElement).toBeInTheDocument();
  });
});
