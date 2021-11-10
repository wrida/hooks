import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
    return (
        <div>
            <h1 className="title">{movie.title}</h1>
             <img src ={movie.posterUrl} width="30%" height="10%"alt/>
             <StarRatingComponent 
          starCount={5}
          value={movie.rating}
        />
        </div>
    )
}

export default MovieCard