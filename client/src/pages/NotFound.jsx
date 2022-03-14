import { Link } from 'react-router-dom';

/**
 *
 * @returns {JSX.Element} - 404 page.
 */
export default function NotFound() {
  return (
    <div className="center">
      <h1>404 - Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
