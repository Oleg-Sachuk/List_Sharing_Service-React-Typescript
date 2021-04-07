import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';

const App: React.FC = () => {
  const [list, setList] = useState([])

  const AddnewPos = (title: string) => {
    console.log("Add new", title);
    
  }

  return (
    <>
      <Navbar />
      <div className="mainTitle">
        <h1>Create your tasklist!</h1>
      </div>
      <div>
        <ToDoForm onAdd={AddnewPos} />
      </div>
    </>
  )
}


export default App;
