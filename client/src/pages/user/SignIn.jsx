import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UserForm from '../../components/user/UserForm';

/**
 *
 * @returns {JSX.Element} - The signin page.
 */
export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  /**
   *
   * Sends the signin request to the server.
   * @param {object} formData - The form data in JSON format.
   */
  function addSignInHandler(formData) {
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        // If the response is not ok, throw an error and set the error message.
        if (res.status !== 200) {
          setErrorMessage('The email address or password is incorrect.');
          throw new Error('The email address or password is incorrect.');
        }
        return res.json();
      })
      // If the response is ok, set the user's token.
      .then((resData) => {
        localStorage.setItem('token', resData.token);
      })
      // Dispatch the signin/login action.
      .then(() => {
        dispatch({ type: 'LOGIN' });
      })
      // Navigate to the places page.
      .then(() => {
        navigate('/places', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <UserForm
        onSubmit={addSignInHandler}
        type="Sign In"
        errorMessage={errorMessage}
      />
    </section>
  );
}
