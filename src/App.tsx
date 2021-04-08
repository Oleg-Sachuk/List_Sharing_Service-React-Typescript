import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/MainPage';
import About from './components/AboutPage';
import Share from './components/SharePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={Share} path="/share" exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}


export default App;
