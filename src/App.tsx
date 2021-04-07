import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';
import List from './components/ListComponent';
import { IntForList } from './interface';

const App: React.FC = () => {
  const [list, setList] = useState<IntForList[]>([])

  const AddnewPos = (title: string) => {
    const newPosition = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setList(prev => [newPosition, ...prev])
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
      <div>
        <List list={list} />
      </div>
    </>
  )
}


export default App;
