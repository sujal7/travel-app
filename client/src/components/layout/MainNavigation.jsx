import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This is component specific style which only applies for this component.
import classes from './MainNavigation.module.css';

/**
 *
 * @returns {JSX.Element} - The main navigation of the application.
 */
export default function MainNavigation() {
  // Checks if the user is authenticated.
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <header className={classes.header}>
      <Link to="">
        <div className={classes.logo}>Travel App</div>
      </Link>
      <nav>
        <ul>
          {/* Display different navigation menu items based on the authentication status. */}
          {isAuth ? (
            <ul>
              <li>
                <Link to="/places">Places</Link>
              </li>
              <li>
                <Link to="/signout">Sign Out</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
}
