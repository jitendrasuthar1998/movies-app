import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from "../../../hooks/useFetch";
import Carousel from '../../../components/carousel/Carousel';

const Popular = () => {

  const [mediaType, setMediaType] = useState("movie");

  const {data, loading} = useFetch(`/${mediaType}/popular`)

  const handleTabChange = (tab) => {
    if(tab === "Movies"){
        setMediaType("movie")
    }else{
        setMediaType("tv");
    }
  };

//   console.log("timeWindow", mediaType);

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTabs data={['Movies', 'TV Shows']} handleTabChange={handleTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={mediaType}/>
    </div>
  );
};

export default Popular;
