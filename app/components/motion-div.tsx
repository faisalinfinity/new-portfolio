'use client'
import React from 'react'
import { motion } from "framer-motion"

interface props {
    children: React.ReactNode, key: number
}
const MotionDiv: React.FC<props> = ({ children, key }) => {
    return (
        <motion.div
            className="flex items-center"
            style={{ animationDelay: `${key * 0.5}s` }}
            animate={{ transform: 'translateX(-100%)' }}
            transition={{type:"tween", ease: 'linear', duration: 5, repeat: Infinity }}
        >

            {children}
        </motion.div>
    )
}

export default MotionDiv