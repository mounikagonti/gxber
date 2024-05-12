import React from 'react'
import {IoMdClose} from 'react-icons/io'
import {GrLocation} from 'react-icons/gr'
import {FiPhone} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'

const servicesArray = [
  {
    id: 1,
    text: 'ABOUT US',
  },
  {
    id: 2,
    text: 'CAREERS',
  },
  {
    id: 3,
    text: 'PRESS',
  },
  {
    id: 4,
    text: 'BLOG',
  },
  {
    id: 5,
    text: 'FEATURES',
  },
  {
    id: 6,
    text: 'MEETING',
  },
]

interface SidebarProps {
  setSideMenu: React.Dispatch<React.SetStateAction<boolean>>
  sideMenu: boolean
}

const Sidebar: React.FC<SidebarProps> = ({setSideMenu, sideMenu}) => {
  const handleOnClose = () => {
    setSideMenu(false)
  }

  return (
    <div className={sideMenu ? 'sidebar_overlay' : 'sidebar_overlay_hidden'}>
      <div className={sideMenu ? 'sidebar' : 'sidebar sidebar-hidden'}>
        <div onClick={handleOnClose} className='close_icon'>
          <IoMdClose />
        </div>
        <h1>Services</h1>
        <div className='services'>
          {servicesArray.map((service) => (
            <div key={service.id} className='title'>
              {service.text}
            </div>
          ))}
        </div>
        <h1>Contact Info</h1>
        <div className='contact_info'>
          <div className='address'>
            <div className='icon'>
              <div className='location'>
                <GrLocation />
              </div>
              <strong className='title'>Our office</strong>
            </div>
            <div className='label'>
              A-1, Envanto Headquarters, <br />
              <span>Melbourne, Australia. </span>
            </div>
          </div>
          <div className='address contact'>
            <div className='icon'>
              <div className='location'>
                <FiPhone />
              </div>
              <strong className='title'>Phone</strong>
            </div>
            <div className='label'>
              <a href='tel:+00-999-999-9999'>+(00) 999 999 9999</a> <br />
              <a href='tel:+000-000-0000'>000 000 0000</a>
            </div>
          </div>
          <div className='address mail_info'>
            <div className='icon'>
              <div className='location'>
                <GoMail />
              </div>
              <strong className='title'>Email</strong>
            </div>
            <div className='label'>
              <a href='mailto:contact@gxber.com'>contact@gxber.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
