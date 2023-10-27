import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByID, getRewviewsByID } from 'services/api';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const filmId = useParams();
  useEffect(() => {
    const getResponseAboutReview = async () => {
      try {
        const response = await getReviewsByID(filmId.movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getResponseAboutReview();
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(el => (
          <div key={el.id}>
            <h2>{el.content}</h2>
          </div>
        ))
      ) : (
        <h2>Sorry, there are no reviews</h2>
      )}
    </div>
  );
};

export default Review;
