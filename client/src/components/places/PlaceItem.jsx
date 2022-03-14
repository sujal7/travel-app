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
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites);
  // console.log(props.reviewsRating);
  // console.log(props.places);
  function clickHandler() {
    navigate(`/places/${props.id}`, {
      replace: true,
      // state: {
      //   name: props.name,
      //   mobileNumber: props.mobileNumber,
      //   workNumber: props.workNumber,
      //   homeNumber: props.homeNumber,
      //   address: props.address,
      //   email: props.email,
      // },
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
            <div className={classes.actions}>
              <button onClick={clickHandler}>View Reviews</button>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}
