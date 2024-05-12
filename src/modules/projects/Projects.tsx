import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'


const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='projects-wrapper'>
          <div className='projects-heading'>
            <h1>View our Recent Completed project</h1>
            <ButtonCompt btnText='View all project' />
          </div>
          {Array.from({length: 3}, (_, i) => (
            <div className='project-section' key={i}>
              <div className='project-section-image'>
                <img
                  src='https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/1.jpg'
                  alt='project'
                />
              </div>
              <div className='project-layer'>
                <a href='1'>
                  <img
                    src='https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/arrow.png'
                    alt='icon'
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='projects-gradient'></div>
      </div>
    </div>
  )
}

export default Projects
