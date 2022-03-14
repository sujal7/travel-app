import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import SignOut from './pages/user/SignOut';
import Layout from './components/layout/Layout';
import AllPlaces from './pages/places/AllPlaces';
import PlaceReview from './pages/places/PlaceReview';

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/places" element={<AllPlaces />} />
          <Route path="/places/:id" element={<PlaceReview />} />
          {isAuth ? (
            <>
              <Route path="/places" element={<AllPlaces />} />
              {/* <Route path="/add-places" element={<AddContacts />} /> */}
            </>
          ) : (
            <>{/* <Route path="/signup" element={<SignUp />} /> */}</>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
