import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'

const NewsLatter = () => {
  return (
    <div className='newsLatter'>
      <div className='container'>
        <div className='newsLatter_wrapper'>
          <h1 className='newsLatter_text'>Get newslatter</h1>
          <div className='newsLatter_section'>
            <input type='email' placeholder='Enter your mail' />
            <div className='btn'>
              <ButtonCompt btnText='SUBSCRIBE' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter
