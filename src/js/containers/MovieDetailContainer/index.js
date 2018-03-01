import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';


function mapStoreToProps(store) {
  return {
   movieData: store.movieSearch.movieData,
  
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);