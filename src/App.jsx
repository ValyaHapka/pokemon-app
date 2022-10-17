import * as React from 'react';
import Content from './components/Content';

import Header from './components/Header';
import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [pokes, setPokes] = React.useState([]);
  const [initialState, setInitialState] = React.useState([]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="App">
        <Header setPokes={setPokes} initialState={initialState} />
        <Content
          pokes={pokes}
          setPokes={setPokes}
          initialState={initialState}
          setInitialState={setInitialState}
        />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
