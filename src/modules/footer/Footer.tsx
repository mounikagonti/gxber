import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa6'
import {IoLogoTwitter} from 'react-icons/io'
import {HiOutlineGlobeAlt} from 'react-icons/hi2'

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <IoLogoTwitter />,
  },
  {
    id: 3,
    icon: <HiOutlineGlobeAlt />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
]
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_wrapper_top'>
            <h2>Let’s Talk about Project</h2>
            <p>
              At G.Xber we specialize in designing, building, shipping and
              scaling beautiful,{' '}
              <span>usable products with blazing-fast efficiency</span>
            </p>
            <div className='btn'>
              <ButtonCompt btnText='LETS TALK' />
            </div>
            <p>© 2024 G.xber Creative Agency , All Right Receved.</p>
          </div>
          <hr className='horizontal' />
          <div className='footer_wrapper_bottom'>
            <div className='logo_wrapper'>
              <div className='logo'>G.</div>
              <span>XBER</span>
            </div>
            <div className='footer_nav'>
              <a href='https://themexriver.com/wp/gxbar/about/'>Case Studies</a>
              <a href='https://themexriver.com/wp/gxbar/about/'>Pricing Plan</a>
            </div>
            <div className='social_links'>
              {socialMedia.map((item) => (
                <a href='https://themexriver.com/wp/gxbar/about/'>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
