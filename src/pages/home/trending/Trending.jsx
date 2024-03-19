import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {

  const [timeWindow, setTimeWindow] = useState("day");

  const {data, loading} = useFetch(`/trending/all/${timeWindow}`)
  console.log("data at Trending is == ", data);
  const handleTabChange = (tab) => {
    setTimeWindow(tab.toLowerCase());
  };

  // console.log("timeWindow", timeWindow);

  return (
    <section className='carouselSection' data-testid="trendingSection">
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTabs data={['Day', 'Week']} handleTabChange={handleTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </section>
  );
};

export default Trending;
