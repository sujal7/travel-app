import PlaceItem from './PlaceItem';
import classes from './PlaceList.module.css';
// import sortPlaces from '../../utils/sortPlaces';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns The list of places.
 */
export default function PlaceList(props) {
  // Sorts the places based on the place name.
  // sortPlaces(props.places);

  return (
    <ul className={classes.list}>
      {props.places.map((place) => (
        // Sets the props of the contact item component.
        <PlaceItem
          key={place._id}
          id={place._id}
          name={place.name}
          reviewsRating={place.reviews[0].ratings}
        />
      ))}
    </ul>
  );
}
