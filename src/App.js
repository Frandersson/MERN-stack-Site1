import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = "/" component = {Home} />
          <Route path ="/About" component = {About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
