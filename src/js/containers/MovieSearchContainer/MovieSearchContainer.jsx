import React from 'react';
import { Link } from 'react-router-dom';
import {
 movieLookup,
} from './MovieSearchAction'

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

this.handleSearchBtn = this.handleSearchBtn.bind(this);

  }

  handleSearchBtn() {
   var video = document.getElementById('videoSearch').value 
   const {dispatch} = this.props
   dispatch(movieLookup(video))
}


  render() {
    const {movieData} = this.props
    console.log('balls', movieData);
    return (

      < div >
        <div className="container">
          <div className="jumbotron bg" id='jumboTop'>
            <h1 className="text-center">Movie Finder</h1>
          </div>

          {/* MOVIE SEARCH BAR */}

          <div className="row">
            <div className="col">
              <div className="input-group">
                <input id="videoSearch" type="text" className="form-control" placeholder="Movie search..." />
                <span className="input-group-btn">
                  <button onClick={this.handleSearchBtn} className="btn btn-primary">Search</button>
                </span>
              </div>
            </div>
          </div>
          
        {
          movieData.length>0 && movieData.map((movieItem, index) => {
              console.log("daddy", movieItem);
              return (

            
          <div key={movieItem.imdbID} className="card bg my-2 col-12" id='jumbo'>
            <div className="card-body">
              <div className="row justify-content-center">
                {/* POSTER */}
                <div className="col-lg-3 float-left">
                  <img className="text-center img-fluid max-width: 80% height: auto rounded mx-auto p-3" src={movieItem.Poster}  />
                </div>
                {/* MOVIE TEXT INFO */}
                <div className="col-lg-9 float-right">
                  <div className="align-self-center mt-3">
                    <h2 className="pb-4 mb-0">{movieItem.Title}</h2>
                  </div>
                  <div>
                    <h6 className="pb-4 mb-0">{movieItem.Year}</h6>
                  </div>
                  <div className="align-self-center">
                    <textbox>
                      {movieItem.Plot}
                    </textbox>
                  </div>
                  <span className="input-group-btn">
                   <Link to={`/movie/${index}`} className='btn btn-primary'> More Info</Link>
                  </span>

                </div>
              </div>
            </div>
          </div>
             )})}

        </div>
      </div>
    )

  }
}




export default MovieSearchContainer;