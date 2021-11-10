import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({filterInput,starRate}) => {
    return (
        <div>
          <input type="text" placeholder ='search movie'onChange={(e)=>filterInput(e.target.value)}/>
          <StarRatingComponent 
          name="rate1" 
          starCount={5}
          // value={rating}
           onStarClick={(value)=>starRate(value)}
        />
        </div>
    )
}

export default Filter