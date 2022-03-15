import { useNavigate } from 'react-router-dom';

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
      <div>
        <h2>
          Created by: {props.username} ({props.email})
        </h2>
        <h2>Ratings</h2>
        <div>{props.ratings}</div>
        <h2>Comment</h2>
        <p>{props.comment}</p>
        <h2>Cost</h2>
        <div>NRs. {props.cost}</div>
        <h2>Heritage</h2>
        {props.heritages.map((heritage, index) => (
          <div key={index}>{heritage}</div>
        ))}

        <h2>Places To Visit</h2>
        {props.placesToVisit.map((placeToVisit, index) => (
          <div key={index}>{placeToVisit}</div>
        ))}

        <h2>Safety</h2>
        <div>{props.safety}</div>
      </div>
    </li>
  );
}
