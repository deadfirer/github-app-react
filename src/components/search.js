'use strict'

import React from 'react';
import ajax from '@fdaciuk/ajax';

const Search = () => (
    <div className='search'>
        <input 
            type='text' 
            placeholder='Buscar usuário no Github'
           onKeyUp = {(e) => {
                const key = e.which || e.keyCode;
                const ENTER = 13;
                if (keyCode == ENTER) {
                    ajax().get(`https://api.github.com/users/${value}`)
                    .then((result) => {

                    });
                }
            } }
        />

    </div>
);

export default Search;