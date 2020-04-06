import axios from 'axios';
import { GET_ERRORS } from './ProjectActionTypes';

export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/projects", project);
        history.push("/dashboard");
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

