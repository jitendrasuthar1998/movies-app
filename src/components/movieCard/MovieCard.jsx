import React from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

import './movieCard.scss';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';
import PosterFallback from '../../assets/no-poster.png';
import {
  removeMovieFromFavorites,
  saveMovieIntoFavorites,
} from '../../redux/slices/homeSlice';

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const { favoriteMovies } = useSelector((state) => state.home);

  let itemIndex = favoriteMovies?.findIndex((item) => item.id == data.id);

  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(saveMovieIntoFavorites({ name: data.title, id: data.id }));
  };

  const handleRemoveFromFavorites = (e) => {
    e.stopPropagation();
    dispatch(removeMovieFromFavorites({ name: data.title, id: data.id }));
  };
  
  return (
    <div
      className='movieCard'
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className='posterBlock'>
        <Img className='posterImg' src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
            {itemIndex === -1 ? (
              <IoMdHeartEmpty
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  zIndex: 10,
                  width: 20,
                  height: 20,
                }}
                size={20}
                color='red'
                onClick={handleFavorite}
              />
            ) : (
              <IoMdHeart
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  zIndex: 10,
                  width: 20,
                  height: 20,
                }}
                size={20}
                color='red'
                onClick={handleRemoveFromFavorites}
              />
            )}
          </React.Fragment>
        )}
      </div>
      <div className='textBlock'>
        <span className='title'>{data.title || data.name}</span>
        <span className='date'>
          {dayjs(data.release_date).format('MMM D, YYYY')}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
