import { GET_PROJECTS } from '../actions/ProjectActionTypes';

const initialState = {
    projects: []
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


        default:
            return state;
    }
}