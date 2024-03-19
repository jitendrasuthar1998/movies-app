import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './heroBanner.scss';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const { data, loading } = useFetch('/movie/upcoming');

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg = url.backdrop + data?.results[0]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearch = (event) => {
    if (event.key == 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleBtnSearch = () => {
    if(query.length > 0) {
      navigate(`/search/${query}`);
    }
  }
  return (
    <section className='heroBanner' data-testid="banner">
      {!loading && (
        <div className='backdrop-img'>
          <Img src={background} />
        </div>
      )}
      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title' data-testid="welcomeText">Welcome</span>
          <span className='subTitle'>
            Millions of movies, Tv shows and people to discover. Explore now
          </span>
          <div className='searchInput'>
            <input
              type='text'
              value={query}
              placeholder='Search for a movie or tv show...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <button onClick={() => handleBtnSearch()}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
