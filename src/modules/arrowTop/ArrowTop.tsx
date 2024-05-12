import React, {useState, useEffect} from 'react'

const ArrowTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    // Clean up
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`arrow-top ${isVisible ? 'show-arrow-top' : 'hide-arrow-top'}`}
      onClick={scrollToTop}
    >
      &uarr;
    </div>
  )
}

export default ArrowTop
