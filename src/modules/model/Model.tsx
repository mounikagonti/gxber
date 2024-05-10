import React from 'react'

const Model = () => {
  return (
    <div className='model'>
      {Array.from({length: 10}, (_, i) => (
        <h1 key={i}>HOME {i + 1}</h1>
      ))}
    </div>
  )
}

export default Model
