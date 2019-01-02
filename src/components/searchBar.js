import React from 'react';

const SearchBar = props => (
  <form  className='searchBar'>
    <input onChange={props.searchStates}/>
  </form>
)


export default SearchBar
