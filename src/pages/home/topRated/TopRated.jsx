import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
  const [mediaType, setMediaType] = useState('movie');

  const { data, loading } = useFetch(`/${mediaType}/top_rated`);

  const handleTabChange = (tab) => {
    if (tab === 'Movies') {
      setMediaType('movie');
    } else {
      setMediaType('tv');
    }
  };

  return (
    <section className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs
          data={['Movies', 'TV Shows']}
          handleTabChange={handleTabChange}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={mediaType} />
    </section>
  );
};

export default TopRated;
