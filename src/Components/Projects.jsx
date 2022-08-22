import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import p1 from '../img/projects/p1.png'
import p2 from '../img/projects/p2.png'
import p3 from '../img/projects/p3.png'
import p4 from '../img/projects/p4.png'
import p5 from '../img/projects/p5.png'
import p6 from '../img/projects/p6.png'
import p7 from '../img/projects/p7.png'
import p8 from '../img/projects/p8.png'
import portfolio from '../img/projects/portfolio.png'
import { useInView } from 'react-intersection-observer'


function Projects() {

    const { ref, inView } = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    useEffect(() => {

        if (inView) {
            animation.start({
                x: 0,
                transition: { type: "spring" },
                default: {
                    ease: "linear"
                }
            })
        }
        if (!inView) {
            animation.start({
                x: "-100vw"
            })
        }


    }, [inView])


    return (
        <motion.div ref={ref}
            className="bg-slate-50 drop-shadow-lg rounded-lg p-4 md:p-6">
            <motion.h1
                whileHover={{ scale: 1.04 }}
                animate={animation}
                className="font-bold relative before:absolute before:content  before:h-1 before:w-20 before:bg-secondary before:-bottom-2 before:rounded-lg before:left-0">Portfolio</motion.h1>
            <motion.div
                animate={animation}
                className="my-6 grid grid-cols-1 drop-shadow-md md:grid-cols-4 gap-2 md:gap-5">
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://gamehub-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p1} alt="img" />
                    <p className="flex items-center  h-[40%] text-center text-base font-bold m-0">GameHub</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">E-Commerce</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Primer-proyecto/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p2} alt="img" />
                    <p className="flex items-center  h-[40%] text-center text-base font-bold m-0">Bigs New Today</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Newsletter</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Portafolio--Web/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={portfolio} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">Portfolio</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Portfolio</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Black-Grade/" rel="noopener noreferrer" target="_blank" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p4} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">Black Grade</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Clothes Shop</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Giphy-App/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p5} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">Gif Expert App</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Search Gif</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/App-Salon/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p6} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">The Barber Company</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Book appointments</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Listado-de-Gastos/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p7} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">Gasto Semanal</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">Calculate expenses</p>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://apoloarc.github.io/Carrito-de-compras/" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-4 border border-slate-200  drop-shadow-xs rounded-lg h-60 w-full flex flex-col items-center gap-3 justify-evenly">
                    <img className="h-[60%] rounded-lg m-auto" src={p8} alt="img" />
                    <p className="flex items-center h-[40%] text-center text-base font-bold m-0">U-Commerce</p>
                    <p className="h-[20%] m-0 text-xs text-gray-400">E-Commerce</p>
                </motion.a>
            </motion.div>
            <div className="hidden">
                <button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    className="button bg-secondary p-2 rounded-lg drop-shadow-lg text-slate-50 hover:text-secondary hover:bg-slate-50 transition-all ease-in-out duration-100 text-sm">More</button>
            </div>
        </motion.div>
    )
}

export default Projects