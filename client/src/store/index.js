import { createStore } from 'redux';

/**
 *
 * A reducer function that takes the previous state and an action, and returns the next state.
 * @param {Object} state - The state of the store.
 * @param {Object} action - The action to be performed.
 * @returns {Object} - The new state of the store.
 */
const appReducer = (state = { isAuth: false, favorites: [] }, action) => {
  switch (action.type) {
    // Sets isAuth to true when the user logs in.
    case 'LOGIN':
      return { ...state, isAuth: true };

    // Sets isAuth to false when the user logs out.
    case 'LOGOUT':
      return { ...state, isAuth: false };

    // Adds a new favorite to the favorites array.
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };

    // Removes a favorite from the favorites array.
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

// Create the Redux store.
const store = createStore(appReducer);

export default store;
