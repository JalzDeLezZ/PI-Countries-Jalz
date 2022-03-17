import React from 'react'

const Pagination = (props) => {
  const {onLeftClick, onRightClick, page, totalPages} = props

  return (
      <div>

        <button onClick={onLeftClick}>←←←</button>

        <h1>{page} de {totalPages}</h1>

        <button onClick={onRightClick}>→→→</button>

      </div>
  )
}

export default Pagination