import React from 'react'

interface ButtonComptProps {
  btnText: string
}

const ButtonCompt: React.FC<ButtonComptProps> = ({btnText}) => {
  return <button className='btn-brand'>{btnText}</button>
}

export default ButtonCompt
