import React from 'react'
import CommonHOC from './commonHOC'

const LikeimgHOC = ({handleCount,count}) => {
  return (
    <div>
        <button onClick={handleCount}>LikeImg {count}</button>
    </div>
  )
}

export default CommonHOC(LikeimgHOC)