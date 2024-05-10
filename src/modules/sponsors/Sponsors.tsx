import React from 'react'

const sponsors = [
  {
    id: 1,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/5-2.png',
  },
  {
    id: 2,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/3-2.png',
  },
  {
    id: 3,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/1-3.png',
  },
  {
    id: 4,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/4-2.png',
  },
  {
    id: 5,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/3-2.png',
  },
]
const Sponsors = () => {
  return (
    <div className='sponsors'>
      <div className='container'>
        <div className='sponsor_wrapper'>
          <h6>OVER 1K+ SOFTWARE BUSINESSES GROWING WITH GIXBER</h6>
          <div className='sponsor'>
            {sponsors.map((item) => (
              <a href='https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/1-3.png'>
                <img src={item.img} alt='sponsor' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
