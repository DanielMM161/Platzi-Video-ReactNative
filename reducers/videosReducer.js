import {GET_CATEGORIES, GET_MOVIES, SET_SELECTED_MOVIES, SEARCH_MOVIES} from '../types/videosTypes';

const INITIAL_STATE = {
    suggestionList: [],
    categoryList: [],
    selectedMovie: {},
    searchMovie: {}
};

export default (state = INITIAL_STATE, action) => { 
	switch (action.type) {
        
        case GET_CATEGORIES:
            return {
                ...state,
                categoryList: action.payload
            }
        
        case GET_MOVIES:
            return {
                ...state,
                suggestionList: action.payload
            }
        
        case SET_SELECTED_MOVIES:
            return {
                ...state,
                selectedMovie: action.payload
            }

        case SEARCH_MOVIES:
            return {
                ...state,
                searchMovie: action.payload
            }

		default: return state;
	};
};