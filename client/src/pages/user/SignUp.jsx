import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/user/UserForm';

/**
 *
 * @returns {JSX.Element} - The signup page.
 */
export default function SignUp() {
  const navigate = useNavigate();

  /**
   *
   * Sends the signup request to the server.
   * @param {Object} formData - The form data in JSON format.
   */
  function addSignUpHandler(formData) {
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // Navigate to the signin page.
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <UserForm onSubmit={addSignUpHandler} type="Sign Up" />
    </section>
  );
}
