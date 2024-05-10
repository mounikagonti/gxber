import React from 'react'
import ButtonCompt from '../buttoncomp/ButtonCompt'

const servicesDetails = [
  {
    id: 1,
    icon: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/bulb.png',
    title: 'Web Solution',
    descriptionOne:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    descriptionTwo:
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
  {
    id: 2,
    icon: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/smartphone.png',
    title: 'MObile SOlution',
    descriptionOne:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    descriptionTwo:
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
  {
    id: 3,
    icon: 'https://themexriver.com/wp/gxbar/wp-content/uploads/2022/10/bulb-1.png',
    title: 'Custom Solution',
    descriptionOne:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    descriptionTwo:
      'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  },
]

const Services = () => {
  return (
    <section className='services'>
      <div className='container'>
        <div className='services-wrapper'>
          <div className='services-heading'>
            <h1>Unlock Revenue Growth for Your Business</h1>
            <ButtonCompt btnText='View all services' />
          </div>
          {servicesDetails?.map((item) => (
            <div className='service-section' key={item.id}>
              <div className='service-section-image'>
                <img src={item.icon} alt='icon' />
              </div>
              <div className='service-section-content'>
                <h1>{item.title}</h1>
                <p>{item.descriptionOne}</p>
                <p>{item.descriptionTwo}</p>
                <a href=''>READ DETAILS</a>
              </div>
              <div className='shadow-layer'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
