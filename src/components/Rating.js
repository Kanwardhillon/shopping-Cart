import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, style, click }) => {
  return (
    <div>
      {
        [...Array(5)].map((_,i) =>(
          <span key={i} onClick={() => click(i)} style={style}>
            {rating > i ? (
              <AiFillStar fontSize='15px' />
            ):(
              <AiOutlineStar fontSize='15px' /> 
            )}
          </span>
        ))
      }
      
    </div>
  )
}

export default Rating
