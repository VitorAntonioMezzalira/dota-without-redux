import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/index';
import HeroPage from './pages/Hero/index';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/character/:id" component={HeroPage} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/log-in" component={LogIn} />
      <Route path="/sign-up" component={SignUp} />
    </BrowserRouter>
  )
}

export default App;
