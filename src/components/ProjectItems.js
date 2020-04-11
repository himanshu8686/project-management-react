import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../actions/ProjectActionCreaters';

class ProjectItems extends Component {

    onDeleteClick = (id) => {
        // console.log("on delete click called", id);
        this.props.deleteProject(id);
    }

    render() {
        const { project } = this.props;
        // console.log("project props", project);
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{project.projectIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                    </li>
                                </Link>
                                <Link to={`/updateProject/${project.projectIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1">Update Project Info</i>
                                    </li>
                                </Link>
                                <a href="">
                                    <li className="list-group-item delete">
                                        <i className="fa fa-minus-circle pr-1"
                                            onClick={(event) => {
                                                this.onDeleteClick(project.projectIdentifier)
                                            }}>Delete Project</i>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteProject })(ProjectItems);