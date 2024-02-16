import { describe, it, expect } from 'vitest';
import App from '../../src/App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';

describe('Check whether Header component rendered correctly', () => {
  it('renders Header component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });
});
