import * as React from 'react';
import Content from './components/Content';

import Header from './components/Header';
import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
