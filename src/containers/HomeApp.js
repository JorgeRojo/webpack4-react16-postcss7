import React, { Component } from 'react';   
import { hot } from 'react-hot-loader';  

import HomeLayout from '~/containers/HomeLayout';   

class HomeApp extends Component {  
    render() {
        return (<HomeLayout/>)
    }
}

export default  module.hot ? hot(module)(HomeApp) : HomeApp