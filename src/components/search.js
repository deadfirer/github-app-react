'use struct'

import React, {PropTypes} from 'react';

const Search = ({ isDisabled , handleSearch }) => (
    <div className='search'>
        <input 
            type='text'
            disabled={ isDisabled } 
            placeholder='Buscar usuário no Github'
           onKeyUp = { handleSearch }
        />

    </div>
);

Search.propType = {
    handleSearch : PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search;