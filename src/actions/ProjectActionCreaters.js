import axios from 'axios';
import { GET_ERRORS } from './ProjectActionTypes';
import { GET_PROJECTS } from './ProjectActionTypes';

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/projects", project);
        // check  success response from axios
        console.log("response from axios", res);
        history.push("/dashboard");
    } catch (error) {
        // check error.response
        console.log("error msg", error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/projects");
    console.log("get project response ", res);

    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
};