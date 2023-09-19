import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className="flex w-full h-72 flex-col justify-center items-center bg-cyan p-12 relative ">
        <p className=" text-xl tracking-wide pb-2 " > Entre em contato</p>
        <p className=" text-xl tracking-wide pb-2 " > rodrigobbbuquera@gmail.com</p>
        <p className=" text-xl tracking-wide pb-2 " > (11) 98684-3389</p>
        <SocialMedia/>
        <p className=" text-xs absolute bottom-1 left-1 "> @ 2023, Rodrigo Brezolin</p>
    </footer>
  )
}

export default Footer