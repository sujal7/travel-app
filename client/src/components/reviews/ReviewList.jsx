import ReviewItem from './ReviewItem';
// import classes from './PlaceList.module.css';
// import sortPlaces from '../../utils/sortPlaces';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns The list of reviews.
 */
export default function ReviewList(props) {
  // Sorts the places based on the place name.
  // sortPlaces(props.places);

  return (
    <ul>
      {props.places.map((place) =>
        place.reviews.map((review) => (
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
          />
        ))
      )}
    </ul>
  );
}
