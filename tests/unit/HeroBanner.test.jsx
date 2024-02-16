import { describe, it, expect } from 'vitest';
import App from '../../src/App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';

describe('Check whether HeroBanner component rendered correctly', () => {
  it('renders HeroBanner component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const banner = screen.getByTestId('banner');
    const welcomeText = screen.getByTestId('welcomeText');

    expect(banner).toBeInTheDocument();
    expect(welcomeText).toHaveTextContent("Welcome");
});
});
