import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { motion } from "framer-motion"
import style from '@/styles/Dice.module.css'



export default function Dice() {

    const reload = () => {
        Router.reload(window.location.pathname)
    }


    return (

        <motion.div 
        className={style.container}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 0.8, rotate: 360 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}>
            
            <Image
            src='/dice.svg'
            alt='dice'
            width={100}
            height={100}
            onClick={reload}/>


        </motion.div>
    )
}

