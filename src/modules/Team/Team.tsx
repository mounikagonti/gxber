import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'
import {CgFacebook} from 'react-icons/cg'
import {FaLinkedinIn} from 'react-icons/fa'
import {RiInstagramLine} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa6'

const Team = () => {
  return (
    <section className='team'>
      <div className='container'>
        <div className='team-gradient'></div>
        <div className='team-wrapper'>
          <div className='heading'>
            <h1>People loved our team</h1>
            <ButtonCompt btnText='View all members' />
          </div>
          {Array.from({length: 6}, (_, i) => (
            <div className='team-candidate' key={i}>
              <img
                src='https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/team-6.jpg'
                alt='member'
              />
              <div className='team-overlay'>
                <h3>John Doe</h3>
                <p>Frontend developer</p>
                <div className='social-icons'>
                  <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <CgFacebook />
                  </a>
                  <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn />
                  </a>
                  <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <RiInstagramLine />
                  </a>
                  <a href='http://' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
