import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

function SignIn(props){
    const initialFormData = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.signIn(formData);
    }
    if(props.auth.uid){
        return <Redirect to="/" />
    }
    return(
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text">Log In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Pasword</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn orange darken-3 z-depth-0">Login</button>
                    <div className="red-text center">
                        {props.authError? <p>{props.authError}</p>: null}
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);