import React from 'react'
import HeaderSection from '../components/HeaderSection'
import ServiceSection from '../components/ServiceSection'
import Stats from '../components/Stats'
import ServicesTreePage from './ServicesTreePage'

const LandingPage = () => {
  return (
    <div>
      <HeaderSection/>
      <ServiceSection/>
      <ServicesTreePage/>
      <Stats/>
    </div>
  )
}

export default LandingPage