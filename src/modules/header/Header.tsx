'use client'
import React, {useEffect, useRef, useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {IoSearchOutline} from 'react-icons/io5'
import {CgMenuLeft} from 'react-icons/cg'
import {RiMenu3Line} from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar'
import LeftSidebar from '../leftSidebar/LeftSidebar'
import Modal from '../navItems/Modal'
import useWindowSize from '../../hooks/useWindowSize'

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
  const screenSize = useWindowSize()
  const [sideMenu, setSideMenu] = useState(false)
  const [leftMenu, setLeftMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerMiddleRef = useRef<HTMLDivElement>(null)
  const [activeNavItem, setActiveNavItem] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setActiveNavItem(index)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      headerMiddleRef.current &&
      !headerMiddleRef.current.contains(e.relatedTarget as Node)
    ) {
      setActiveNavItem(null)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOnMenu = () => {
    setSideMenu(true)
  }

  const handleOnLeftMenu = () => {
    setLeftMenu(true)
  }

  return (
    <div className={`header ${scrolled ? 'header scrolled' : ''}`}>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='header_left'>
            <div className='logo'>G.</div>
            <span>XBER</span>
          </div>
          {screenSize.width >= 1200 && (
            <div ref={headerMiddleRef} className='header_middle_wrapper'>
              {headerArray.map((item, index) => (
                <nav
                  key={item.id}
                  className='header_middle'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href='https://themexriver.com/wp/gxbar/about/'
                    className='text'
                  >
                    {item.text}
                  </a>
                  <div className='bounce'>
                    <FaAngleDown />
                  </div>
                  <div
                    className='popup'
                    style={{
                      visibility:
                        activeNavItem === index ? 'visible' : 'hidden',
                    }}
                  >
                    {activeNavItem === index && <Modal />}
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
              {screenSize.width <= 1200 ? <RiMenu3Line /> : null}
            </div>
          </div>
        </div>
        <Sidebar sideMenu={sideMenu} setSideMenu={setSideMenu} />
        <LeftSidebar leftMenu={leftMenu} setLeftMenu={setLeftMenu} />
      </div>
    </div>
  )
}

export default Header
