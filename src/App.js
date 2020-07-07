import React from 'react';
import './App.css';
import UserForm from './components/userForm/userForm'
import AppBar from './components/AppBar/Appbar'


function App() {
  return (
    <div className="App">
      <AppBar />
      <UserForm />
    </div>
  );
}

export default App;
