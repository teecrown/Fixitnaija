import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Report from '../Components/Report'
import Signup from '../Pages/signup'
// import FadingOverlay from '../Components/FadingOverlay' // Uncomment if you want to use the fading overlay component

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Herosection />
        <Report />
        <Signup/>
    </div>
  )
}

export default Homepage