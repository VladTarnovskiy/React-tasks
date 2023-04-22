import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import FormPage from './FormPage';
import { store } from '../../app/store';

describe('Form page', () => {
  test('Form text', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const homeElement = screen.getByText('Personal data');
    expect(homeElement).toBeInTheDocument();
  });
});
