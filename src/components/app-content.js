'user strict'

import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({userinfo, repos, starred}) => (

<div className='app'>
    <Search />               
    {!!userinfo && <UserInfo userinfo={userinfo}/>}
    
    {!!userinfo && <Actions />}

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
    userinfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.string.isRequired,
    starred: React.PropTypes.isRequired
}

export default AppContent;