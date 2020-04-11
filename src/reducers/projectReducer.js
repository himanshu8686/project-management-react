import { GET_PROJECTS, DELETE_PROJECT } from '../actions/ProjectActionTypes';
import { GET_PROJECT } from '../actions/ProjectActionTypes';

const initialState = {
    projects: [],
    project: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return (
                {
                    ...state,
                    projects: action.payload
                }
            );

        case GET_PROJECT:
            return (
                {
                    ...state,
                    project: action.payload
                }
            );

        case DELETE_PROJECT:
            return (
                {

                }
            );
        default:
            return state;
    }
}