import React from 'react'
import HeaderSection from '../components/HeaderSection'
import ServiceSection from '../components/ServiceSection'
import Stats from '../components/Stats'
import ServicesTreePage from './ServicesTreePage'
import ReviewSection from '../components/ReviewSection'

const LandingPage = () => {
  return (
    <div>
      <HeaderSection/>
      <ServiceSection/>
      <ServicesTreePage/>
      <ReviewSection/>
      <Stats/>
    </div>
  )
}

export default LandingPage