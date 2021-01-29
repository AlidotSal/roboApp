import React from 'react';
import './search-box.css';

const SearchBar = (props) => {

  return (
    <div className="search-bar">
        <input type="search" placeholder="robot search" onChange={props.onChange}/>
    </div>
  );
}

export default SearchBar;