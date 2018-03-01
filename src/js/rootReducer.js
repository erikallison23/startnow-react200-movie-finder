import { combineReducers } from 'redux';
import MovieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer';
//import MovieDetailReducer from './reducers/MovieDetailReducer';

const rootReducer = combineReducers({
movieSearch: MovieSearchReducer
});

export default rootReducer;