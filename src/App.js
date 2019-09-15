import React from 'react';
// import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Home/>
      <Rooms/>
      <SingleRoom/>
      <Error/>
    </div>
  );
}

export default App;
