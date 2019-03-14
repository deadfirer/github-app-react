'user strict'

import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({
    userinfo,
    repos,
    starred,
    isFetching,
    handleSearch,
    getRepos,
    getStarred
}) => (

    <div className='app'>
        <Search handleSearch={handleSearch} />               
        {isFetching && <div>Carregando...</div>}
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        
        {!!userinfo && <Actions 
            getRepos={getRepos}
            getStarred={getStarred}
        />}

        {!!repos.length &&
            <Repos 
                className='repos'
                title='Repositório' 
                repos={repos}
            />
        }

        {!!starred.length &&
            <Repos 
                className='starred'
                title='Favoritos' 
                repos={starred}
            />
        }

    </div> 

);

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array,
    starred: PropTypes.array
}

export default AppContent;