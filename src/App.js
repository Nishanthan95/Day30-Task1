import React from 'react';
import UserList from './components/UserList';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Axios CRUD Task</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
};

export default App;
