import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Header page', () => {
  test('Home', () => {
    render(<Home />);
    const homeElement = screen.getByPlaceholderText('Enter text');
    expect(homeElement).toBeInTheDocument();
  });
});
