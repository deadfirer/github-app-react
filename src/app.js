'use strict'

import React from 'react';
import AppContent from './components/app-content';

class App extends React.Component{
    constructor () {
        super ();
        this.state = {
            userinfo: {
                username: 'Alexandre Faustino',
                photo:'https://avatars3.githubusercontent.com/u/48439371?v=4',
                login: 'deadfirer',
                repos: 1,
                followers: 0,
                following: 0
            },
            repos: [{
                name: 'Reposist',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }
    render (){
        return <AppContent
            userinfo={this.state.userinfo} 
            repos={this.state.repos} 
            starred={this.state.starred} 
        />;
    }
}


export default App;