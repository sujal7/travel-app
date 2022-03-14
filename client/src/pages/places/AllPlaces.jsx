import { useState, useEffect } from 'react';

import PlaceList from '../../components/places/PlacesList';

/**
 *
 * @returns {JSX.Element} - The page where all the places are displayed.
 */
export default function AllPlaces() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  /**
   * Fetches the places from the server.
   */
  useEffect(() => {
    setIsLoading(true);

    // Sends GET request of places to the server.
    fetch('http://localhost:5000/places', {
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
        console.log(places);
        setIsLoading(false);
        setLoadedPlaces(places);
      });
  }, []);

  // Returns the loading page if the places are not loaded yet.
  if (isLoading) {
    return (
      <section>
        <p className="center">Loading...</p>
      </section>
    );
  }

  // Returns the list of places.
  return (
    <section>
      {/* <Favorites /> */}
      <div>
        <h1 className="center primary-color">
          All Places ({loadedPlaces.length})
        </h1>
        <PlaceList places={loadedPlaces} />
      </div>
    </section>
  );
}
