import React from 'react'

const Modal = () => {
  return (
    <div className='modal'>
      {Array.from({length: 10}, (_, i) => (
        <h1 key={i}>HOME {i + 1}</h1>
      ))}
    </div>
  )
}

export default Modal
