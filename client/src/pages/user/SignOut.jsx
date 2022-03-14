import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**
 *
 * @returns {JSX.Element} - The signed out page.
 */
export default function SignOut() {
  const dispatch = useDispatch();

  // Dispatch the signout/logout action.
  dispatch({ type: 'LOGOUT' });

  return (
    <h1 className="center primary-color">
      You have been signed out.
      <br />
      <Link to="/signin">Click Here </Link>to Sign In
      <br />
      OR
      <br />
      <Link to="/signup">Click Here </Link>to Sign Up
    </h1>
  );
}
