'use strict'

import React, {PropTypes} from 'react';

const Search = ({ handleSearch }) => (
    <div className='search'>
        <input 
            type='text' 
            placeholder='Buscar usuário no Github'
           onKeyUp = { handleSearch }
        />

    </div>
);

Search.propType = {
    handleSearch : PropTypes.func.isRequired
}

export default Search;