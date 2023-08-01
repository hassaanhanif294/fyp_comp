import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Login from './pages/Login';
import Recommendation from './pages/Recommendation';
import RecomPic from './pages/RecomPic';
import RecomForm from './pages/RecomForm';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Signup from './pages/Signup';

import Nopage from './pages/Nopage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  return (
         <>
           <BrowserRouter>
              <Routes>   
                  <Route exact path="/" element={<Login />}></Route>
                  <Route exact path="/home" element={<Home />}></Route>
                  <Route exact path="/favourites" element={<Favourites />}></Route>
                  <Route exact path="/recommendation" element={<Recommendation />}></Route>
                  <Route exact path="/recommendation/:gender/:event/:color/:type" element={<RecomForm />}></Route>
                  <Route exact path="/profile" element={<Profile />}></Route>
                  <Route exact path="/settings" element={<Settings />}></Route>
                  <Route exact path="/signup" element={<Signup />}></Route>
                  <Route exact path="/Login" element={<Login />}></Route>
                  <Route exact path="*" element={<Nopage/>} ></Route>
              </Routes>
           </BrowserRouter>
         
         </>
  );
}

export default App;
