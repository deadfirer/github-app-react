'use struct'

import React from 'react';

const UserInfo = ({ userinfo }) => (

    <div className='user-info'>
        
        <img src={ userinfo.photo } />
        <h1 className='username'>
            <a href={`https://github.com/${userinfo.login}`}>{ userinfo.username}</a>
        </h1>

        <ul className='repos-inf'>
            <li>Repositórios: { userinfo.repos }</li>
            <li>Seguidores: { userinfo.followers }</li>
            <li>Seguindo: { userinfo.following }</li>
        </ul>

    </div>
);

UserInfo.propType = {
    userinfo: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired,
        photo: React.PropTypes.string,
        login: React.PropTypes.string,
        repos: React.PropTypes.number,
        followers: React.PropTypes.number,
        following:React.PropTypes.number
    })
}

export default UserInfo;