import { useNavigate } from 'react-router-dom';
import classes from './ReviewItem.module.css';

// import Card from '../ui/Card';
// import classes from './PlaceItem.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - Each place item component.
 */
export default function ReviewItem(props) {
  return (
    <li>
      <div className={classes.reviews}>
        <div className={classes.user}>
          By: {props.username} (<a href="#">{props.email}</a>)
        </div>
        <div className={classes.ratings}>
          <b>Ratings:</b> {props.ratings}
        </div>
        <div className={classes.images}>
          <img src={props.images} alt="" />
        </div>
        <div className={classes.comment}>
          {/* Comment */}
          <p>{props.comment}</p>
        </div>
        <div className={classes.cost}>
          <b>Cost:</b> Nrs.{' '}
          {props.cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </div>
        <div className={classes.heritages}>
          <b>Heritages:</b>
          {props.heritages.map((heritage, index) => (
            <li key={index}> {heritage},</li>
          ))}
        </div>

        <div className={classes.placesToVisit}>
          <b>Places to Visit:</b>
          {props.placesToVisit.map((place, index) => (
            <li key={index}> {place},</li>
          ))}
        </div>

        <div className={classes.safety}>
          <b>Safety:</b> {props.safety}
        </div>
      </div>
    </li>
  );
}
