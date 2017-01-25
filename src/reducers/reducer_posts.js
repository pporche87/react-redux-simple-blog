import { FETCH_POSTS, FETCH_POST } from "../actions/index";

// initial state, choice of array to hold all blog posts
const INITIAL_STATE = { all: [], post: null };

// added action creator 
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_POST:
        return {...state, post: action.payload.data };
    case FETCH_POSTS:
        return { ...state, all: action.payload.data };
    default:
        return state;
    }
}