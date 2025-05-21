import React from 'react'
import Logo from '../assets/Fixitlogo.png'
// import './index.css'

const navbar = () => {
  return (
    <div>
        <navbar>
            <div>
              <img src={Logo} alt="logo"/>
            </div>
            <div>
              <ul>
                <li className="text-[50px]">Home</li>
              </ul>
            </div>
        </navbar>
    </div>
  )
}

export default navbar