import React from 'react';
import './styles.scss';

function SearchBar(props) {
    return (
        <div className="wrap">
            <input className="searchBar" type="text" name="search_box" placeholder="Search for items or shops" value=""></input>
        </div>
    );
}

export default SearchBar;