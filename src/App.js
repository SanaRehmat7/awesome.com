import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import './App.css';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/contact';
import Help from './components/Help';
import TopHeader from './components/Headers/TopHeader';

function App() {
  return (
    <Router>
      <div>
        <TopHeader />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/help" component={Help} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
