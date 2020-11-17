import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/index';
import HeroPage from './pages/Hero/index';
import Profile from './pages/Profile';
import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/character/:id" component={HeroPage} />
      <Route path="/profile/:id" component={Profile} />
    </BrowserRouter>
  )
}

export default App;
