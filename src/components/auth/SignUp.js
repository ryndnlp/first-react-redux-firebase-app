import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';

function SignUp(props){
    const initialFormData = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
        props.signUp(formData);
    }
    if(props.auth.uid){
        return <Redirect to="/" />
    }
    return(
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Pasword</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn orange darken-3 z-depth-0">Sign Up</button>
                    <div className="red-text center">
                        {props.authError? <p>{props.authError}</p>: null}
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signUp: (newUser) => {
            dispatch(signUp(newUser))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);