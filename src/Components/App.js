import React, { Component } from 'react';
import Main from '../Containers/Main';
import User from '../Containers/User';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Main />
                <User />
            </div>
        )
    }
}


export default App;