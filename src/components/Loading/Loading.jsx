import React from 'react'
import { ScaleLoader } from 'react-spinners'
import "./loading.css"

const Loading = () => {
  return (
    <div className='loading'>
    <ScaleLoader className='spinner' color='#FFD15C' />
    </div>
  )
}

export default Loading