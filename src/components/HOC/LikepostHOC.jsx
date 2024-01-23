import React from 'react'
import CommonHOC from './CommonHOC'

const LikepostHOC = ({handleCount,count}) => {
  return (
    <div>
        <button onClick={handleCount}>LikePost {count}</button>
    </div>
  )
}

export default CommonHOC(LikepostHOC)