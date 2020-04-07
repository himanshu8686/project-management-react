import React, { Component } from 'react';
import CreateProjectButton from './projects/CreateProjectButton';
import ProjectItems from './ProjectItems';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../actions/ProjectActionCreaters';


class Dashboard extends Component {

    // click = () => {
    //     this.props.getProjects();
    // }

    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
     */
    componentDidMount() {
        this.props.getProjects()
    }

    render() {
        const { projects } = this.props.projects

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />

                            <CreateProjectButton />
                            {/* <button onClick={this.click}> Projects</button> */}
                            <br />
                            <hr />

                            {/* {console.log("==>", projects)} */}

                            {
                                projects.map(project => {
                                    console.log("project", project);
                                    return <ProjectItems key={project.id} project={project} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propType = {
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps, { getProjects })(Dashboard);