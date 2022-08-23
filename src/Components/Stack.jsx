import React, { useEffect } from 'react'
import react from '../img/dev/react.png'
import postgre from '../img/dev/postgre.png'
import express from '../img/dev/express.png'
import node from '../img/dev/node.png'
import html from '../img/dev/html.png'
import js from '../img/dev/js.png'
import css from '../img/dev/css.png'
import tailwind from '../img/dev/tailwind.png'

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

function Stack() {

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const titleAnimation = useAnimation();
    const cardAnimation = useAnimation();


    useEffect(() => {

        if (inView) {
            titleAnimation.start({
                x: 0,
                scale: 1,
                transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3
                }
            })
            cardAnimation.start({
                x: 0,
                transition: {
                    type: "spring",
                    duration: 1.3,
                    bounce: 0.3
                }
            })
        }

        if (!inView) {
            titleAnimation.start({
                x: "200vh",
                scale: 0
            })
            cardAnimation.start({
                x: "200vh",
            })
        }

        if (!inView) {

        }


    }, [inView])

    return (
        <div ref={ref} className="bg-slate-50 rounded-lg drop-shadow-lg p-4 md:p-6  my-6">

            <motion.p
                whileHover={{ scale: 1.02, cursor: 'pointer' }}
                // animate={titleAnimation}
                className="relative before:w-12 before:h-1 before:bg-secondary before:absolute before:-bottom-1 before:rounded-lg font-semibold">Stack</motion.p>

            <motion.div
                // animate={cardAnimation}
                className="grid grid-cols-2 md:grid-cols-8 content-center justify-items-center gap-4 md:gap-2 my-6 drop-shadow-md">
                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={html} alt="img" />
                    </div>
                    <p className="text-center font-semibold">HTML</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={css} alt="img" />
                    </div>
                    <p className="text-center font-semibold">CSS</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={js} alt="img" />
                    </div>
                    <p className="text-center font-semibold">Javascript</p>
                </motion.div>


                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={react} alt="img" />
                    </div>
                    <p className="text-center font-semibold">React</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={express} alt="img" />
                    </div>
                    <p className="text-center font-semibold">Express</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={postgre} alt="img" />
                    </div>
                    <p className="text-center font-semibold">PostgreSQL</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="h-[70%]" src={node} alt="img" />
                    </div>
                    <p className="text-center font-semibold">Node JS</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.2, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className="flex flex-col gap-12 md:gap-2 justify-center items-center p-4 border border-slate-50 rounded-lg lg:border-none lg:rounded-none w-full">
                    <div className="h-20 md:h-[70%] flex justify-center items-center">
                        <img className="w-full md:w-[70%]" src={tailwind} alt="img" />
                    </div>
                    <p className="text-center font-semibold">Tailwind css</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Stack