import axios from 'axios';

export function movieDetail(search) {
  return {
      type: "MOVIE_DETAIL",
      payload: n/a
  }
}

export function detailBtn(search) {
  console.log('balls', search);
    return {
      type: 'SEARCH_BTN',
      payload: axios.get(`/detail/${search}`)
                    .then(res => {
                      console.log(res.data)
                      return res.data;
                    })
    };
  }