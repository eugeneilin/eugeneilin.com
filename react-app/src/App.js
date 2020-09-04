import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
