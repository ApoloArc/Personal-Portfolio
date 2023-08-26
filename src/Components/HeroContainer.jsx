import React, { } from 'react'
import person from '../img/humans/principal2.png'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

function HeroContainer() {

    return (
        <div className="bg-slate-50 dark:bg-slate-800 my-2 p-4 md:p-6 w-full md:border md:border-gray-100 md:drop-shadow-lg h-[95vh]  rounded-2xl flex flex-col md:flex-row-reverse justify-around items-center">
            <motion.div className="mb-5 md:w-[35%] h-full flex items-end md:items-center ">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    // initial={{ opacity: 0, x: "100vw" }}
                    // animate={{ opacity: 1, x: 0 }}
                    // transition={{ delay: 0.5, type: "spring", duration: 0.5 }}
                    className="w-full" src={person} alt="img" />
            </motion.div>
            <motion.div
                className="h-full text-center md:text-start w-full md:w-[55%] flex flex-col md:justify-center justify-center items-center md:items-start gap-2 md:gap-10">
                <div>

                    <motion.p
                        // initial={{ opacity: 0, y: "-100vh" }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ delay: 0.3, type: "spring", duration: 0.5 }}
                        className="text-sm text-gray-500 dark:text-gray-400">Hello, I'm Angelo</motion.p>
                    <motion.p
                        // initial={{ opacity: 0, x: "-100vw" }}
                        // animate={{ opacity: 1, x: 0 }}
                        // transition={{ delay: 0.8, type: "spring", bounce: 0.2 }}
                        className="font-bold text-[1.2rem] md:text-[2.5rem] lg:text-[5rem]">I'm a <span className="text-secondary tracking-wide">Front End Developer</span>
                    </motion.p>
                </div>
                <div>
                    <motion.p
                        // initial={{ opacity: 0, scale: 0.5 }}
                        // animate={{ opacity: 1, scale: 1 }}
                        // transition={{ delay: 1.1, type: "spring", bounce: 0.3 }}
                        className="text-sm hidden md:block">If you can dream ik, you can do it ❤️.</motion.p>
                    <div className="mt-5 flex gap-2">
                        <motion.a
                            href="https://github.com/ApoloArc"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FiGithub className="text-2xl h-6 p-[3px] cursor-pointer hover:drop-shadow-md" />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/angelo-mancilla/" target="_blank"
                            rel="noopener noreferrer">
                            <FiLinkedin className="text-2xl h-6 p-[3px] cursor-pointer" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroContainer
