import React from 'react'

const ResultModal = ({winner}) => {
  return (
    <div className='result-container'>
        <div className="result">
            <h2>{`${winner} wins the game`}</h2>
        </div>
    </div>
  )
}

export default ResultModal