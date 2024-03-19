import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import trendingData from "../../__ mocks __/trendingData.json";
import Trending from '../../src/pages/home/trending/Trending';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';
import { BrowserRouter } from 'react-router-dom';

global.fetch = vi.fn();

function getTrendingData(data){
  return {json: ()=> new Promise((resolve) => resolve(data))}
}



describe('Check whether Trending component rendered correctly', () => {
  it('renders trending component', () => {


    fetch.mockResolvedValue(getTrendingData(trendingData));


    render(
     <BrowserRouter>
      <Provider store={store}>
        <Trending/>
      </Provider>
     </BrowserRouter>
    );

    const trendingSection = screen.getByTestId('trendingSection');
    const allCarouselItems = screen.getAllByTestId("carouselItem");


    expect(trendingSection).toBeInTheDocument();
    expect(allCarouselItems.length).toBe(20);
});
});
