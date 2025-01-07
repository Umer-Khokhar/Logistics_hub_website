import React from 'react'
import { useNavigate } from 'react-router-dom'
const ContactBtn = () => {
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/contact-us/')
    }
  return (
         <button onClick={() => navigateTo()} className="bg-blue-600 hover:bg-blue-600/80 rounded-sm text-white py-3 px-5 mt-20 text-center flex justify-center items-center">
            Get Started now
          </button>
  )
}

export default ContactBtn