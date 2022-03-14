import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import SignOut from './pages/user/SignOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
