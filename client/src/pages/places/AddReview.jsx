import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AddReviewForm from '../../components/reviews/AddReviewForm';

// import { storage } from '../../firebase/initialize';

import { storage } from '../../firebase/initalize';

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

/**
 *
 * @returns {JSX.Element} - The add contacts page.
 */
export default function AddContacts() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const { id } = useParams();

  /**
   * Sends the add review request to the server.
   * @param {Object} formData - The form data in JSON format.
   */
  function addReviewHandler(formData, file) {
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    /**
     * Uploads the image to Firebase Storage and gets the url.
     */
    const promise = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });

    promise.then((downloadURL) => {
      formData.images = downloadURL;
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
    });
  }

  return (
    <section>
      <h1 className="center primary-color">Add a Review</h1>
      <AddReviewForm onAddReview={addReviewHandler} />
    </section>
  );
}
