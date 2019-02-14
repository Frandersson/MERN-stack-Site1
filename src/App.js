import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SearchOrder from './pages/SearchOrder';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/static_components/Navbar';
import Footer from './components/static_components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = "/" component = {Home} />
          <Route path ="/About" component = {About} />
          <Route path = "/PlaceOrder" component = {PlaceOrder} />
          <Route path = "/SearchOrder" component = {SearchOrder} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
