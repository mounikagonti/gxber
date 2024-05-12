import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero_wrapper'>
          <div className='hero_left'>
            <div className='title'>BUILD DIGITAL BRAND WITH EXPART</div>
            <h1>DEVELOP THE DIGITAL UNIVERSE</h1>
            <a href='1' className='btn'>
              <ButtonCompt btnText='ABOUT US' />
            </a>
          </div>
          <div className='hero_right'>
            <img
              className='heroImg'
              src={
                'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/image-1.png'
              }
              alt='Logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
