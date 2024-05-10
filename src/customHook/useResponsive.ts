'use client'

import {useEffect, useState} from 'react'

const useResponsive = () => {
  const getResponsiveSize = () => {
    const width = window.innerWidth
    if (width < 576) {
      return 'small'
    } else if (width >= 576 && width < 768) {
      return 'medium'
    } else if (width >= 768 && width < 992) {
      return 'large'
    } else {
      return 'extraLarge'
    }
  }

  const [screenSize, setScreenSize] = useState(getResponsiveSize())

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getResponsiveSize())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useResponsive
