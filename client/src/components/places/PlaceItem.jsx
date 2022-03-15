import { useNavigate } from 'react-router-dom';

import Card from '../ui/Card';
import classes from './PlaceItem.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - Each place item component.
 */
export default function PlaceItem(props) {
  const navigate = useNavigate();
  function clickHandler() {
    navigate(`/places/${props.id}`, {
      replace: true,
    });
  }

  function addReviewHandler() {
    navigate(`/reviews/${props.id}`, {
      replace: true,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <img src={props.imageUrl} alt="" />
          <h3>{props.name}</h3>
          <p>{props.reviewsRating}</p>
          {props.type === 'all' && (
            <>
              <div className={classes.actions}>
                <button onClick={clickHandler}>View Reviews</button>
              </div>
              <div className={classes.actions}>
                <button onClick={addReviewHandler}>Add Review</button>
              </div>
            </>
          )}
        </div>
      </Card>
    </li>
  );
}
