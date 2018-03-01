import axios from 'axios';

export function movieLookup(search) {
  return {
      type: "MOVIE_LOOKUP",
      payload:
        axios
        .get(`/mSearch/${search}`)
        .then(res => res.data)
  }
}

