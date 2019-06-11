import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }


    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="yellow lighten-4">
                    <h5 className="black-text"> Log In</h5>
                    <div className="input-field">

                        <label className="black-text" htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />

                    </div>

                    <div className="input-field">

                        <label className="black-text" htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />

                    </div>

                    <div className="input-field">
                        <button className="waves-effect waves-red btn deep-orange lighten-1  ">Login</button>
                    </div>
                    <div className="red-text center">
                        {authError ? <p> {authError} </p> : null}

                    </div>
                </form>

            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
