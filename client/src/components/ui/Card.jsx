import classes from './Card.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - The card component with the given style.
 */
export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
