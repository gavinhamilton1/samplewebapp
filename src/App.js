import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toUpperCase();
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    console.log('doing fetch');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => { setMonsters(users); });
  },
    []);


  useEffect(() => {
    console.log('filtering');
    setFilteredMonsters(monsters.filter((monster) => {
      return monster.name.toUpperCase().includes(searchField);
    }));
  }, [monsters, searchField]);


  return (
    <div className="App">
      <h1 className='app-title'>Robots App v1.0.2</h1>
      <SearchBox className="searchBox" onChangeHandler={onSearchChange} placeholder="Search Apps" />
      <CardList monsters={filteredMonsters} />
    </div >
  );

}

export default App;
