import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/index';
import HeroPage from './pages/Hero/index';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './assets/styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {
  return (

    <BrowserRouter>
      <div class="interface">
        <Header />
        <main class="main">
          <Route path="/" exact component={HomePage} />
          <Route path="/character/:id" component={HeroPage} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-up" component={SignUp} />
        </main>
        <Footer />
        <Aside />
      </div>
    </BrowserRouter>
  )
}

export default App;
