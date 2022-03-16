import { useNavigate } from 'react-router-dom';

import ReviewItem from './ReviewItem';
import classes from './ReviewList.module.css';
// import classes from './PlaceList.module.css';
// import sortPlaces from '../../utils/sortPlaces';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns The list of reviews.
 */
export default function ReviewList(props) {
  const navigate = useNavigate();

  function addReviewHandler() {
    navigate(`/reviews/${props.places[0]._id}`, {
      replace: true,
    });
  }
  return (
    <ul>
      <div className={classes.actions}>
        <button onClick={addReviewHandler}>Add Your Review</button>
      </div>
      <h1>Reviews</h1>
      {props.places.map((place) =>
        place.reviews.map((review, index) => (
          <>
            <ReviewItem
              key={review._id}
              id={review._id}
              ratings={review.ratings}
              heritages={review.heritages}
              placesToVisit={review.placesToVisit}
              reviewData={place.reviewData}
              comment={review.comment}
              cost={review.cost}
              safety={review.safety}
              images={review.images}
              username={place.reviewData[index].username}
              email={place.reviewData[index].email}
            />{' '}
          </>
        ))
      )}
    </ul>
  );
}
