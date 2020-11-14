import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/index';
import HeroPage from './pages/Hero/index';
import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/character/:id" component={HeroPage} />
    </BrowserRouter>
  )
}

export default App;
