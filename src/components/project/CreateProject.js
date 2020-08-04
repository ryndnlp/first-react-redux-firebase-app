import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';

function CreateProject(props){
    const initialFormData = {
        title: '',
        content: ''
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
        props.createProject(formData);
        props.history.push('/');
    }
    return(
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea className="materialize-textarea" id='content' onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn orange darken-3 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: project => {
            dispatch(createProject(project));
        }
    }
}

export default connect(null , mapDispatchToProps)(CreateProject);