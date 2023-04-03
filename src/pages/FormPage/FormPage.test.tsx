import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('Form page', () => {
  test('Form text', () => {
    render(<FormPage />);
    const homeElement = screen.getByText('Personal data');
    expect(homeElement).toBeInTheDocument();
  });
});
