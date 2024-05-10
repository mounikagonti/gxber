'use client'
import useResponsive from '../../customHook/useResponsive'
import React, {useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {IoSearchOutline} from 'react-icons/io5'
import {CgMenuLeft} from 'react-icons/cg'
import {RiMenu3Line} from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar'
import LeftSidebar from '../leftSidebar/LeftSidebar'

// import Model from '../model/Model'

const headerArray = [
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

const Header = () => {
  const screenSize = useResponsive()
  const [sideMenu, setSideMenu] = useState(false)
  const [leftMenu, setLeftMenu] = useState(false)

  // const hoverRef = useRef<HTMLAnchorElement>(null)
  // console.log(hoverRef.current?.style)

  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolled(true)
  //     } else {
  //       setScrolled(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const handleOnMenu = () => {
    setSideMenu(true)
  }

  const handleOnLeftMenu = () => {
    setLeftMenu(true)
  }

  return (
    <div className='header'>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='header_left'>
            <div className='logo'>G.</div>
            <span>XBER</span>
          </div>
          {screenSize === 'small' || screenSize === 'medium' ? (
            ''
          ) : (
            <div className='header_middle_wrapper'>
              {headerArray.map((item) => (
                <nav key={item.id} className='header_middle'>
                  <a
                    href='https://themexriver.com/wp/gxbar/about/'
                    className='text'
                  >
                    {item.text}
                  </a>
                  <div className='bounce'>
                    <FaAngleDown />
                  </div>
                </nav>
              ))}
            </div>
          )}
          <div className='header_right_wrapper'>
            <div className='search_icon'>
              <IoSearchOutline />
            </div>
            <div onClick={handleOnMenu} className='menu_icon'>
              <CgMenuLeft />
            </div>
            <div onClick={handleOnLeftMenu} className='sideMenu'>
              {screenSize === 'small' || screenSize === 'medium' ? (
                <RiMenu3Line />
              ) : (
                ' '
              )}
            </div>
          </div>
        </div>
        {/* <div className='sidebar'> */}
        {sideMenu ? <Sidebar setSideMenu={setSideMenu} /> : ' '}
        {leftMenu ? <LeftSidebar setLeftMenu={setLeftMenu} /> : ' '}
      </div>
    </div>
  )
}

export default Header
