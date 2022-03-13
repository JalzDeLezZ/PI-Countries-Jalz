import React from 'react'

import '../styles/components/loadinc.scss'

const Loading = () => {
  return (
      
    <div className="c_loading">
        <div className="under"></div>
        <div className="center">
            <div className="ring"></div>
            <span>loading...</span>
        </div>
    </div>
  )
}

export default Loading