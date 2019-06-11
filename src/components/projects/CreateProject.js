import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/')

    }


    render() {
        const {auth} = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="yellow lighten-4">
                    <h5 className="black-text "> Create new project</h5>
                    <div className="input-field">

                        <label className="black-text " htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />

                    </div>

                    <div className="input-field">

                        <label className="black-text " htmlFor="content">Project content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>


                    </div>

                    <div className="input-field">
                        <button className="btn deep-orange lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
