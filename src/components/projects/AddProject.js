import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from './../../actions/ProjectActionCreaters';

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_Date: "",
            end_Date: "",
            errors: {}
        }
    }

    /**
     * componentWillReceiveProps() is invoked before a mounted component receives new props.
     *  If you need to update the state in response to prop changes (for example, to reset it),
     *  you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    /**
     * when user types it will reflect in state and setState() method is used for setting state
     */
    onFieldChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    /**
     * when the form submitted this method will invoked 
     * event.preventDefault(); prevents the form value clearation
     */
    onFormSubmit = event => {
        event.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_Date: this.state.start_Date,
            end_Date: this.state.end_Date
        }
        console.log(newProject);

        // this createProject comes from mapDispatchToProps from our connect function i.e connect(mapStateToProps, { createProject })
        this.props.createProject(newProject, this.props.history);

    }

    /**
     * render method will render component over web pages
     */
    render() {

        // this errors comes from the mapStateToProps 
        const { errors } = this.state;

        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName" value={this.state.projectName} onChange={this.onFieldChange} />
                                    {errors.projectName && (
                                        <div className="invalid-feedback">
                                            {errors.projectName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.projectIdentifier
                                        })}
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier} onChange={this.onFieldChange} />

                                    {errors.projectIdentifier && (
                                        <div className="invalid-feedback">
                                            {errors.projectIdentifier}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <textarea className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.description
                                    })}
                                        placeholder="Project Description"
                                        name="description" value={this.state.description} onChange={this.onFieldChange}
                                    />
                                    {errors.description && (
                                        <div className="invalid-feedback">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_Date" value={this.state.start_Date} onChange={this.onFieldChange} />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="end_Date" value={this.state.end_Date} onChange={this.onFieldChange} />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 *  PropTypes is just like type safety
 */
AddProject.propType = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

/**
 * This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes.
 *  If you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps.
 * @param {*} state is our original state
 */
const mapStateToProps = state => ({
    errors: state.errors
});

/**
 * The connect() function connects a React component to a Redux store.
 *  It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
 * It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
 */
export default connect(mapStateToProps, { createProject })(AddProject);