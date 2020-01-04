import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() {
        return (
            <div className="user">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The user page.</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>User's name is : {this.props.user.userName}</h1>
                        <h1>User's age is : {this.props.user.age}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer,
        math: state.MathReducer
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserName: (name) => {
//             dispatch({
//                 type: "SET_NAME",
//                 payload: name
//             })
//         }
//     }
// }


export default connect(mapStateToProps)(User);