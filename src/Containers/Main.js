import React, { Component } from 'react';
import { setName, setAge } from '../Actions/userActions';
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        return (
            <div className="user">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main page.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button onClick={() => this.props.setUserName("XYZ")}>Change the user's name</button>
                    </div>
                    <div className="col-xs-12">
                        <button onClick={() => this.props.setUserAge(18)}>Change the user's age</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            dispatch(setName(name))
        },
        setUserAge: (age) => {
            dispatch(setAge(age))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);