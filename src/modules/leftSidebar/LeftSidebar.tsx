import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {IoSearch} from 'react-icons/io5'

const servicesArray = [
  {
    id: 1,
    text: 'HOME',
  },
  {
    id: 2,
    text: 'ABOUT US',
  },
  {
    id: 3,
    text: 'SERVICES',
  },
  {
    id: 4,
    text: 'PROJECTS',
  },
  {
    id: 5,
    text: 'BLOG',
  },
  {
    id: 6,
    text: 'CONTACT',
  },
]

interface LeftSidebarProps {
  setLeftMenu: React.Dispatch<React.SetStateAction<boolean>>
  leftMenu: boolean
}
const LeftSidebar: React.FC<LeftSidebarProps> = ({setLeftMenu, leftMenu}) => {
  const handleOnClose = () => {
    setLeftMenu(false)
  }

  return (
    <div
      className={
        leftMenu ? 'leftSidebar_overlay' : 'leftSidebar_overlay_hidden'
      }
    >
      <div
        className={leftMenu ? 'leftSidebar' : 'leftSidebar leftSidebar-hidden'}
      >
        <div onClick={handleOnClose} className='close_icon'>
          <AiOutlineClose />
        </div>
        <div className='logo_wrapper'>
          <div className='logo'>G.</div>
          <span>XBER</span>
        </div>
        <div className='search_wrapper'>
          <input type='text' placeholder='SEARCH HERE' />
          <div className='icon'>
            <IoSearch />
          </div>
        </div>
        <div className='services'>
          {servicesArray.map((service) => (
            <a href='1' key={service.id} className='title'>
              {service.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
