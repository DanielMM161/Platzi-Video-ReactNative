import {GET_CATEGORIES, GET_MOVIES, SET_SELECTED_MOVIES, SEARCH_MOVIES} from '../types/videosTypes';
const BASE_API = 'https://yts.mx/api/v2/list_movies.json';
// import axios from 'axios';

export const get_Categories = (id) => async (dispatch) => {

    try {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const {data} = await query.json();

        dispatch({
            type: GET_CATEGORIES,
            payload: data.movies
        })
    } catch (error) {
        console.log('ERROR AL TRAER CATEGORIAS', error);
    }
};

export const get_Movies = () => async (dispatch) => {
    try {
        const query = await fetch(`${BASE_API}list_movies.json?`);
        const { data } = await query.json();

        dispatch({
            type: GET_MOVIES,
            payload: data.movies
        })
    } catch (error) {
        console.log('ERROR AL TRAER MOVIES', error);
    }
};

export const set_Selected_Movie = (item) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_MOVIES,
        payload: item
    })
}

export const search_Movie = (title) => async (dispatch) => {

    try {
        const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
        const { data } = await query.json();
        console.log('DATAAA', data.movies[0])
        
        dispatch({
            type: SET_SELECTED_MOVIES,
            payload: data.movies[0]
        })
    } catch (error) {
        console.log('ERROR AL TRAER MOVIES', error);
    }
    
}