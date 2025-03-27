import { motion } from 'motion/react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-background-50'>
        <motion.div 
        className='w-16 h-16 border-4 border-primary-950 border-t-transparent rounded-full'
        animate={{rotate: 360}}
        transition={{repeat: Infinity, duration: 1, ease: "linear"}} />
    </div>
  )
}

export default Loader