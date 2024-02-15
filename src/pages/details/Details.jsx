import React from 'react';
import './details.scss';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import SimilarMovies from './carousels/SimilarMovies';
import Recommendations from './carousels/Recommendations';

const Details = () => {
  const { mediaType, id } = useParams();

  console.log('mediaType', mediaType);
  console.log('id', id);
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading}/>
      <SimilarMovies mediaType={mediaType} id={id}/>
      <Recommendations mediaType={mediaType} id={id}/>
    </div>
  );
};

export default Details;
