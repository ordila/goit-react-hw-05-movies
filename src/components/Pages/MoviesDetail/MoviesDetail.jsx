import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import styles from './MovieDetailPage.module.css';

const MoviesDetail = () => {
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  const [isOpen, setIsOpen] = useState(false);

  const [infoAboutMovie, setInfoAboutMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMoreInformationAboutFIlmByID = async () => {
      try {
        const informationAboutMovie = await getMovieById(movieId);
        setInfoAboutMovie(informationAboutMovie);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoreInformationAboutFIlmByID();
  }, [movieId]);

  const onLinkClick = event => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Link to={backLinkRef.current} className={styles.linkToBack}>
        Back
      </Link>
      <div className={styles['movie-detail']}>
        <img
          alt={infoAboutMovie.title}
          src={`https://image.tmdb.org/t/p/w300/${infoAboutMovie.poster_path}`}
        ></img>
        <h2>{infoAboutMovie.title}</h2>
        <p>Rating: {infoAboutMovie.vote_average}</p>
        <p>Description: {infoAboutMovie.overview}</p>

        <ul>
          {infoAboutMovie && infoAboutMovie.genres ? (
            infoAboutMovie.genres.map(genre => (
              <li key={genre.id}>{genre.title || genre.name}</li>
            ))
          ) : (
            <li>No genres available</li>
          )}
        </ul>
        <Link onClick={onLinkClick} to={`cast`}>
          Cast
        </Link>
        <Link onClick={onLinkClick} to={`review`}>
          Review
        </Link>
        <div className="wrapper-cast">{isOpen && <Outlet></Outlet>}</div>
      </div>
    </>
  );
};

export default MoviesDetail;
