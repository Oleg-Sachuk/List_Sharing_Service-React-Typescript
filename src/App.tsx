import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Hello TS!</h1>
    </>
  )
}


export default App;
