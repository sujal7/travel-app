import Card from '../ui/Card';
import classes from './PlaceItem.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - Each place item component.
 */
export default function PlaceItem(props) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites);
  console.log(props.reviewsRating);
  console.log(props.places);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.reviewsRating}</p>
        </div>
      </Card>
    </li>
  );
}
