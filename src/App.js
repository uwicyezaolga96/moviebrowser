import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AboutView from './component/AboutView';
import Something from './component/something';
import SearchView from './component/SearchView';
import { BrowserRouter, Switch , Routes , Route } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    console.log(searchText, 'is the search text');
    fetch(
      'https://api.themoviedb.org/3/movie/11?api_key=1212ce90f28fc6ad99bf0a3a01d55f91'
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
  }, [searchText]);
  return (
    <>
      <BrowserRouter>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Switch>        
          <h1>Hello world</h1>
          <>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutView />} />
            <Route path='/something' element={<Something />} />
            <Route
              path='/search'
              element={
                <SearchView
                  keyword={searchText}
                  searchResults={searchResults}
                />
              }
            />
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
