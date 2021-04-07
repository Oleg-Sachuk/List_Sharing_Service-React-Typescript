import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';
import List from './components/ListComponent';
import { IntForList } from './interface';

const App: React.FC = () => {
  const [list, setList] = useState<IntForList[]>([]);

  useEffect( () => {
    const saved = JSON.parse(localStorage.getItem('list') || '[]') as IntForList[]
    setList(saved)
  }, [])

  useEffect( () => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])

  const AddnewPos = (title: string) => {
    if(title !== '') {
      const newPosition = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setList(prev => [newPosition, ...prev])
    }
  }

  const UnderlinePos = (id: number) => {
    setList(prev => prev.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
      return item
    }))
  }

  const RemovePos = (id: number) => {
    setList(prev => prev.filter(item => item.id !== id))
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
        <List list={list} pressCheck={UnderlinePos} pressDel={RemovePos} />
      </div>
    </>
  )
}


export default App;
