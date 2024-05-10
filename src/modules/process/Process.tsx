import React from 'react'
const processArray = [
  {
    id: 1,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/bulb-2.png',
    title: 'Find New Ideas',
    text: 'methods and techniques to taking raw data - mining for insights and years of experience will.',
  },
  {
    id: 2,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/graph.png',
    title: 'Diagnosis & Analysis',
    text: 'methods and techniques to taking raw data - mining for insights and years of experience will.',
  },
  {
    id: 3,
    img: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/result.png',
    title: 'Implement & Result',
    text: 'methods and techniques to taking raw data - mining for insights and years of experience will.',
  },
]
const Process = () => {
  return (
    <div className='process'>
      <div className='container'>
        <div className='process_wrapper'>
          {processArray.map((item) => (
            <div key={item.id} className='process_block'>
              <img src={item.img} alt='process' />
              <h2>{item.title}</h2>
              <div className='text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process
