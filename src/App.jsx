import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import FullPokemon from './components/FullPokemon';

import Header from './components/Header';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/pokemon/:name" element={<FullPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
