import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCasts } from 'services/api';

const Cast = () => {
  const [dataAboutCasts, setDataAboutCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCatstFromApi = async () => {
      try {
        const responce = await requestCasts(movieId);
        setDataAboutCasts(responce.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCatstFromApi();
  }, []);

  return (
    <div>
      {dataAboutCasts.map(el => (
        <div key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
            alt={el.name}
          />
          <h2>{el.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cast;
