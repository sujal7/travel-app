import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AddReviewForm from '../../components/reviews/AddReviewForm';

/**
 *
 * @returns {JSX.Element} - The add contacts page.
 */
export default function AddContacts() {
  const navigate = useNavigate();
  const { id } = useParams();

  /**
   * Sends the add review request to the server.
   * @param {Object} formData - The form data in JSON format.
   */
  function addReviewHandler(formData) {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: 'POST',
      body: JSON.stringify(formData),
      // Sets the header of the request.
      headers: {
        'Content-Type': 'application/json',
        // Sets the token of the request.
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then(() => {
        navigate('/places', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section>
      <h1 className="center primary-color">Add a Review</h1>
      <AddReviewForm onAddReview={addReviewHandler} />
    </section>
  );
}
