import React, { Component } from 'react';
import { createProject, getProject } from './../../actions/ProjectActionCreaters';
import { connect } from "react-redux";
import classnames from 'classnames';
import PropTypes from "prop-types";

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_Date: "",
            end_Date: "",
            created_At: "",
            updated_At: "",
            errors: {}
        }
    }

    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here
     * It will trigger an extra rendering, but it will happen before the browser updates the screen.
     *  This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
     */
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id);

    }

    /**
     * this method will contain selected project object
     *  mapStateToProps method gives project as a props in the form of projectAsProps which is received by nextProps
     */
    componentWillReceiveProps(nextProps) {
        console.log("next props", nextProps)
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_Date,
            end_Date,
            created_At,
            updated_At
        } = nextProps.projectAsProps;

        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            start_Date,
            end_Date,
            created_At,
            updated_At
        });

        if (nextProps.errorAsProps) {
            this.setState({ errors: nextProps.errorAsProps });
        }
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = event => {
        event.preventDefault();
        const updatedProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_Date: this.state.start_Date,
            end_Date: this.state.end_Date,
            created_At: this.state.created_At,
            updated_At: this.state.updated_At
        }
        this.props.createProject(updatedProject, this.props.history);
        console.log("updated project", updatedProject);
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.projectName
                                        })}
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange} />
                                    {
                                        <div className="invalid-feedback">
                                            {errors.projectName}
                                        </div>
                                    }
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.projectIdentifier
                                        })}
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        placeholder="Unique Project ID"
                                        disabled />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.description
                                        })}
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}></textarea>
                                    {
                                        <div className="invalid-feedback">
                                            {errors.description}
                                        </div>
                                    }
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.start_Date
                                        })}
                                        name="start_Date"
                                        value={this.state.start_Date}
                                        onChange={this.onChange} />
                                    {
                                        <div className="invalid-feedback">
                                            {errors.start_Date}
                                        </div>
                                    }
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.end_Date
                                        })}
                                        name="end_Date"
                                        value={this.state.end_Date}
                                        onChange={this.onChange} />
                                    {
                                        <div className="invalid-feedback">
                                            {errors.end_Date}
                                        </div>
                                    }
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

UpdateProject.propType = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    projectAsProps: state.projects.project,
    errorAsProps: state.errors
});
export default connect(mapStateToProps, { createProject, getProject })(UpdateProject);