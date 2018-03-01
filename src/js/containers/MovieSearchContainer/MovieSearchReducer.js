const defaultState = {
  movieData: {},
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
      
        case 'MOVIE_SEARCH_FULFILLED': {
         return {
           ...state,
           movieData: payload
         }
        }

        default : {return state}

    }
}