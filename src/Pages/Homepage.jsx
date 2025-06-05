import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Footer from '../Components/footer'
import Report from '../Components/Report'
import Faq from '../Components/FAQs'
import Join from '../Components/Join'
import Create from '../Pages/CreateAccount'

const Homepage = () => {
  return (
    <div>
      <Navbar />
        <Herosection />
        <Report />
        <Join />
        <Faq />
        <Footer />
    </div>
  )
}

export default Homepage