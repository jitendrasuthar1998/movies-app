import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import './detailsBanner.scss';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import Genres from '../../../components/genres/Genres';
import CircleRating from '../../../components/circleRating/CircleRating';
import Img from '../../../components/lazyLoadImage/Img.jsx';
import PosterFallback from '../../../assets/no-poster.png';
import { PlayButton } from '../PlayButton.jsx';
import VideoPopup from '../../../components/videoPopup/VideoPopup.jsx';

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  // console.log('mediaType', mediaType);
  // console.log('id', id);

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  // console.log("one movie ya tv data == ", data);
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  };

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres.map((g) => g.id);

  const directors = crew?.filter((f) => f.job === 'Director');
  const writers = crew?.filter(
    (f) => f.job === 'Screenplay' || f.job === 'Writer'
  );
  const creatorsName = data?.created_by?.map((d) => d.name);
  const directorNames = directors?.map((d) => d.name);
  const writersNames = writers?.map((w) => w.name);

  return (
    <div className='detailsBanner'>
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className='backdrop-img'>
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className='opacity-layer'></div>
              <ContentWrapper>
                <div className='content'>
                  <div className='left'>
                    {data.poster_path ? (
                      <Img
                        className='posterImg'
                        src={url.poster + data.poster_path}
                      />
                    ) : (
                      <Img className='posterImg' src={PosterFallback} />
                    )}
                  </div>

                  <div className='right'>
                    <div className='title'>
                      {`${data.name || data.title}`} (
                      {dayjs(data?.release_date).format('YYYY')})
                    </div>
                    <div className='subtitle'>{data.tagline}</div>
                    <Genres data={_genres} />

                    <div className='row'>
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div
                        className='playbtn'
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayButton />
                        <span className='text'>Watch Trailer</span>
                      </div>
                    </div>

                    <div className='overview'>
                      <div className='heading'>Overview</div>
                      <div className='description'>{data.overview}</div>
                    </div>

                    <div className='info'>
                      {data.status && (
                        <div className='infoItem'>
                          <span className='text bold'>Status: </span>
                          <span className='text'>{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className='infoItem'>
                          <span className='text bold'>Release Date: </span>
                          <span className='text'>
                            {dayjs(data.release_date).format('MMM D, YYYY')}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className='infoItem'>
                          <span className='text bold'>Runtime: </span>
                          <span className='text'>
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {directors?.length > 0 && (
                      <div className='info'>
                        <span className='text bold'>Director: </span>
                        <span className='text'>{directorNames.join(', ')}</span>
                      </div>
                    )}
                    {writers?.length > 0 && (
                      <div className='info'>
                        <span className='text bold'>Writers: </span>
                        <span className='text'>{writersNames.join(', ')}</span>
                      </div>
                    )}
                    {creatorsName?.length > 0 && (
                      <div className='info'>
                        <span className='text bold'>Creators: </span>
                        <span className='text'>{creatorsName.join(', ')}</span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className='detailsBannerSkeleton'>
          <ContentWrapper>
            <div className='left skeleton'></div>
            <div className='right'>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
              <div className='row skeleton'></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
