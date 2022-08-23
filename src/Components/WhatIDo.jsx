import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import do1 from '../img/humans/do1.png'
import do2 from '../img/humans/do2.png'
import do3 from '../img/humans/do3.png'
import { motion, useAnimation } from 'framer-motion'
function WhatIDo() {


    const { ref, inView } = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const pAnimate = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1.3, bounce: 0.3
                }
            })

            animation2.start({

                x: 0,
                transition: {
                    type: "spring", duration: 1.3, bounce: 0.3, delay: 0.1
                }


            })
            animation3.start({

                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.3, delay: 0.2
                }


            })
            pAnimate.start({
                x: 0,
                transition: {
                    type: 'tween', duration: 0.8, bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({
                x: "-100vw"
            })
            animation2.start({
                x: "-100vw"
            })
            animation3.start({
                x: "-100vw"
            })
            pAnimate.start({
                x: "-100vw"
            })
        }

    }, [inView])

    return (
        <div ref={ref} className="bg-slate-50 rounded-lg drop-shadow-lg p-4 md:pb-14 md:p-6 my-6 w-full flex flex-col items-center">
            <motion.p
                whileHover={{ scale: 1.02, cursor: 'pointer' }}
                // animate={pAnimate}
                className="mb-6 font-semibold text-start w-full relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-secondary">What I Do</motion.p>
            <motion.div
                className="w-[90%] m-auto grid md:grid-cols-3 gap-4 md:gap-6">
                <motion.div
                    whileHover={{ scale: 1.04, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    // animate={animation}
                    className="flex flex-col items-center gap-2 drop-shadow-md text-center">
                    <img className="w-[60%]" src={do1} alt="img" />
                    <p className="text-xs md:text-md text-zinc-500 ">Development many technologies, using libraries and other support materials</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.04, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    // animate={animation2}
                    className="flex flex-col items-center gap-2 text-center drop-shadow-md">
                    <img className="w-[60%]" src={do2} alt="img" />
                    <p className="text-xs md:text-md text-zinc-500">I make responsive web applications with good practices</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    // animate={animation3}
                    className="flex flex-col items-center gap-2 drop-shadow-md text-center">
                    <img className="w-[60%]" src={do3} alt="img" />
                    <p className="text-xs md:text-md text-zinc-500">Always thinking about improving my skills to be better and better.</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WhatIDo