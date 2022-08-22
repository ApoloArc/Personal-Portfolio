import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className="w-full bg-secondary rounded-lg p-2 md:p-3 text-center text-white font-semibold drop-shadow-lg">
      <motion.p
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        whileTap={{ scale: 1 }}
        className="flex items-center gap-2 justify-center pb-2 text-[22px] md:text-xs ">Made with <BsFillHeartFill /></motion.p>
      <motion.p
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        whileTap={{ scale: 1 }}
        className="text-[15px] md:text-xs">© Angelo Mancilla Mendoza 2022, all rights reserved</motion.p>
    </div>
  )
}

export default Footer