import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'


const Works = () => {
  return (
    <> 
  <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works.</p>
        <h2 className={styles.sectionHeadText}>Projects and Repository.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works,"")