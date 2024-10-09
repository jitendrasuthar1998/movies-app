/* eslint-disable react/prop-types */
import { useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from '../lazyLoadImage/Img';
import PosterFallback from '../../assets/no-poster.png';
import CircleRating from '../circleRating/CircleRating';

import './carousel.scss';
import Genres from '../genres/Genres';

const Carousel = ({title, data, loading, endPoint }) => {
  const carouselContainer = useRef();

  const { url } = useSelector((state) => state.home);
  console.log("endPoint is at Carousel", endPoint);
  const navigate = useNavigate();

  const handleNavigation = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === 'left'
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behaviour: 'smooth',
    });
  };

  const skItem = () => {
    return (
      <div className='skeletonItem'>
        <div className='posterBlock skeleton'></div>
        <div className='textBlock'>
          <div className='title skeleton'></div>
          <div className='date skeleton'></div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel'>
      <ContentWrapper>
        {title && (
          <div className="carouselTitle">{title}</div>
        )}
        <BsFillArrowLeftCircleFill
          className='carouselLeftNav arrow'
          onClick={() => handleNavigation('left')}
        />
        <BsFillArrowRightCircleFill
          className='carouselRightNav arrow'
          onClick={() => handleNavigation('right')}
        />
        {loading ? (
          <div className='loadingSkeleton'>
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        ) : (
          <div className='carouselItems' ref={carouselContainer}>
            {data?.map((item) => {
              const poster = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className='carouselItem'
                  data-testid="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endPoint}/${item.id}`)
                  }
                >
                  <div className='posterBlock'>
                    <Img src={poster} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className='textBlock'>
                    <span className='title'>{item.title || item.name}</span>
                    <span className='date'>
                      {dayjs(item.release_date).format('MMM D, YYYY')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
