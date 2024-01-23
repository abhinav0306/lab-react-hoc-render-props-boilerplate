import React from 'react'
import RenderProps from './RenderProps'
const LikeImgRender = () => {
  return (
    <RenderProps>
{
    ({count,handleCount})=>(
        <div>
            <button onClick={handleCount}>LikeImg {count}</button>
        </div>
    )
}
    </RenderProps>
  )
}

export default LikeImgRender