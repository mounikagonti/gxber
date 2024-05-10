import React from 'react'
import {FaStar} from 'react-icons/fa'

// declare namespace JSX {
//   interface IntrinsicElements {
//     marquee: React.DetailedHTMLProps<
//       React.HTMLAttributes<HTMLMarqueeElement>,
//       HTMLMarqueeElement
//     >
//   }
// }
const Testimonial = () => {
  return (
    <div className='testimonial'>
      <img
        src='https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/digital.png'
        alt='img'
      />
      <div className='container'>
        <div className='testimonial_wrapper'>
          <div className='testimonial_left'>
            <img
              className='heroImg'
              src={
                'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/testimonial.png'
              }
              alt='client'
            />
          </div>
          <div className='testimonial_right'>
            <h2>Our Client Love us</h2>
            <div className='rating_wrapper'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text'>
              “ Wow. What a great experience with this copywriter. Muhammad
              Noman is a very talented yesterday I got his first Email that was
              amazing...What a great experience with this copywriter ”
            </p>
            <div className='author'>
              Keralina Literxtine <br />
              <span>CEO of (Amazon)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
