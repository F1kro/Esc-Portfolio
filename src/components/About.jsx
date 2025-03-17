import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import { title } from 'framer-motion/client'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
    return (

        <Tilt className='sm:w-[255px]  w-full' >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly'
                    options={{ max: 45, scale: 1, speed: 450, glare: true }}>
                    <img src={icon} alt={title} className='object-contain w-16 h-16' />
                    <h3 className='to-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 to-secondary text-[17px] max-w-3xl leading-[30px]'>
                I'm a skill sofftware developer with experiences in javascript , TypeScript and PHP Programming Languages, also advanced in framework like Next.Js , Vue.Js, Laravel, Codeigniter, Node.Js, And Python. I'm quick learner and collaborate closely with teamwork to create efficient, scallable and user friendly solutions, also I'm Learning a cyber security for website application that make me concern about privacy and data security for website development and for better user experiences.
            </motion.p>

            <div className='flex flex-wrap gap-10 mt-20'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about") 