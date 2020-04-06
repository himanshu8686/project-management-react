import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateProjectButton extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/projectForm" className="btn btn-lg btn-info" >Create a Project</Link>
            </React.Fragment>
        );
    }
}
export default CreateProjectButton;