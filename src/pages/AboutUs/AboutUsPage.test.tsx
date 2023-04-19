import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('About us page', () => {
  test('About us text', () => {
    render(<AboutUs />);
    const homeElement = screen.getByText('We are technical market.');
    expect(homeElement).toBeInTheDocument();
  });
});
