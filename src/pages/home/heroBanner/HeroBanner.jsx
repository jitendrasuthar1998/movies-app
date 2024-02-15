import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./heroBanner.scss";


const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const { data, loading } = useFetch('/movie/upcoming');

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[0]?.backdrop_path
    setBackground(bg);
  }, [data]);

  const handleSearch = (event) => {
    if (event.key == 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // console.log("background", background)

  return (
    <div className='heroBanner'>
      {!loading && (
        <div className='backdrop-img'>
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className='heroBannerContent'>
          <span className='title'>Welcome</span>
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
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
