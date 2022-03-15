import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Card from '../ui/Card';
import classes from './AddReviewForm.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - The add contact form component.
 */
export default function AddContactForm(props) {
  // const nameInputRef = useRef();

  const ratingsInputRef = useRef();
  const placesToVisitInputRef = useRef();
  const heritagesInputRef = useRef();
  const costInputRef = useRef();
  const commentInputRef = useRef();
  const safetyInputRef = useRef();

  /**
   * Handles the submit event of the form.
   * @param {Object} event - The event object.
   */
  function submitHandler(event) {
    event.preventDefault();

    const enteredRatings = ratingsInputRef.current.value;
    let enteredPlacesToVisit = placesToVisitInputRef.current.value.split(', ');
    enteredPlacesToVisit = enteredPlacesToVisit.filter(
      (place) => place.trim(' ') !== ''
    );
    let enteredHeritages = heritagesInputRef.current.value.split(', ');
    enteredHeritages = enteredHeritages.filter(
      (place) => place.trim(' ') !== ''
    );
    // console.log(enteredPlacesToVisit);
    const enteredCost = costInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
    const enteredSafety = safetyInputRef.current.value;

    /**
     * Stores the contact details in formData.
     */
    const formData = {
      ratings: enteredRatings,
      placesToVisit: enteredPlacesToVisit,
      heritages: enteredHeritages,
      cost: enteredCost,
      comment: enteredComment,
      safety: enteredSafety,
    };

    console.log(formData);

    props.onAddReview(formData);

    // /* Calls the onEditContacts prop function with the formData if requested from edit
    //    else it calls the onAddContacts prop function */
    // if (props.isEdit) {
    //   props.onEditContacts(formData, file);
    // } else {
    //   props.onAddContacts(formData, file);
    // }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="ratings">
            Ratings <span>*</span>
          </label>
          <input type="number" required id="ratings" ref={ratingsInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="places-to-visit">
            Places To Visit <span>*</span> (Seperate it by comma)
          </label>
          <input
            type="text"
            required
            id="places-to-visit"
            ref={placesToVisitInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="heritages">
            Heritages <span>*</span> (Seperate it by comma)
          </label>
          <input type="text" required id="heritages" ref={heritagesInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="cost">
            Cost <span>*</span>
          </label>
          <input type="number" required id="cost" ref={costInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="comment">
            Comment <span>*</span>
          </label>
          <textarea
            name="comment"
            id="comment"
            ref={commentInputRef}
            cols="50"
            rows="3"
          ></textarea>
        </div>

        <div className={classes.control}>
          <label htmlFor="safety">Safety</label>
          <select id="safety" ref={safetyInputRef} required>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* <div className={classes.control}>
          <label htmlFor="places-to-visit">
            Places To Visit <span>*</span> (Seperate it by comma)
          </label>
          <input
            type="text"
            required
            id="places-to-visit"
            name="places-to-visit[]"
            ref={placesToVisitInputRef}
          />
        </div> */}

        {/* <div className={classes.control}>
          <label htmlFor="photo">
            Photo <span>*</span>
          </label>
          <input
            type="file"
            required
            id="photo"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">
            Address <span>*</span>
          </label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            defaultValue={props.isEdit ? location.state.address : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mobileNumber">
            Mobile Number <span>*</span>
          </label>
          <input
            type="number"
            required
            id="mobileNumber"
            ref={mobileNumberInputRef}
            defaultValue={props.isEdit ? location.state.mobileNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="workNumber">Work Number</label>
          <input
            type="number"
            id="workNumber"
            ref={workNumberInputRef}
            defaultValue={props.isEdit ? location.state.workNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="homeNumber">Home Number</label>
          <input
            type="number"
            id="homeNumber"
            ref={homeNumberInputRef}
            defaultValue={props.isEdit ? location.state.homeNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            required
            id="email"
            ref={emailInputRef}
            defaultValue={props.isEdit ? location.state.email : ''}
          />
        </div> */}
        <div className={classes.actions}>
          <button>Submit Review</button>
        </div>
      </form>
    </Card>
  );
}
