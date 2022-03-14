import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../../components/places/PlacesList';
import ReviewList from '../../components/reviews/ReviewList';

/**
 *
 * @returns {JSX.Element} - The page where all the places are displayed.
 */
export default function AllPlaces() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { id } = useParams();

  /**
   * Fetches the places from the server.
   */
  useEffect(() => {
    setIsLoading(true);

    // Sends GET request of places to the server.
    fetch(`http://localhost:5000/places/${id}`, {
      headers: {
        // Sets the token in the header.
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      // Converts the response to JSON.
      .then((response) => {
        return response.json();
      })
      // Sets the places in the state.
      .then((data) => {
        const places = data;
        // console.log(places);
        setIsLoading(false);
        setLoadedPlaces(places);
      });
  }, []);

  // Returns the loading page if the place is not loaded yet.
  if (isLoading) {
    return (
      <section>
        <p className="center">Loading...</p>
      </section>
    );
  }

  // Returns the particular place.
  return (
    <section>
      <div>
        <h1 className="center primary-color">
          All Places ({loadedPlaces.length})
        </h1>
        <PlaceList places={loadedPlaces} />
        <ReviewList places={loadedPlaces} />
      </div>
    </section>
  );
}
