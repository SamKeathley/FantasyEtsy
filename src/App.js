import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import SearchBar from './components/SearchBar';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
