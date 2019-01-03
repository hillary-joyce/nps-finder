import React from 'react';

const SearchBar = props => (
  <form  className='searchBar'>
    <label>Enter State or Park Name:</label>
    <input onChange={props.searchStates}/>
  </form>
)


export default SearchBar
