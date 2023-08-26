import React from 'react'
import manos from '../img/humans/manos.png'
import { BsPhone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsGithub } from 'react-icons/bs'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { BiMailSend } from 'react-icons/bi'
import { motion } from 'framer-motion'


function Contact() {
    return (
        <div className="dark:bg-slate-800 my-6 p-8 md:p-6 flex flex-col gap-4 md:flex-row items-center justify-evenly bg-slate-50 rounded-lg drop-shadow-lg">
            <div className="h-[50%] md:w-[60%] flex flex-col md:flex-row items-center gap-10 justify-evenly">
                <div className="flex flex-col gap-4">
                    <motion.div
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        className="flex p-2 items-center gap-2 font-semibold">
                        <BsPhone className="text-secondary text-lg" />
                        <p className="text-[15px] md:text-md hover:text-secondary cursor-pointer">+51 973 893 576</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        className="flex p-2 items-center gap-3 font-semibold">
                        <HiOutlineMail className="text-secondary text-lg" />
                        <p className=" hover:text-secondary cursor-pointer text-[15px] md:text-md">angelo.mancilla.dev@gmail.com</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        className="flex items-center p-2 gap-3 font-semibold">
                        <IoLogoLinkedin className="text-secondary text-lg" />
                        <a className=" hover:text-secondary cursor-pointer text-[15px] md:text-md" href="https://www.linkedin.com/in/angelo-mancilla/" target="_blank" rel="noopener noreferrer">linkedin.com/in/angelo-mancilla/</a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        className="flex items-center p-2 gap-3 font-semibold">
                        <BsGithub className="text-secondary text-lg" />
                        <a className=" hover:text-secondary cursor-pointer text-[15px] md:text-md" href="https://github.com/ApoloArc" target="_blank" rel="noopener noreferrer">github.com/ApoloArc</a>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-start  gap-6">
                    <motion.a
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        href="https://drive.google.com/file/d/1nt2yk8f3On8C4l-N43T4rWTP8swpOwa2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-secondary p-3 rounded-lg drop-shadow-lg text-slate-50 hover:text-secondary hover:bg-slate-50 transition-all ease-in-out duration-100 flex items-center gap-2">
                        <IoDocumentTextOutline />
                        <p className="text-xs md:text-md">CV</p>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.04, cursor: 'pointer' }}
                        whileTap={{ scale: 1.05 }}
                        href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-secondary p-3 rounded-lg drop-shadow-lg text-slate-50 hover:text-secondary hover:bg-slate-50 transition-all ease-in-out duration-100 flex items-center gap-2">
                        <BiMailSend />
                        <p className="text-xs md:text-md">Send E-mail</p>
                    </motion.a>
                </div>
            </div>
            <div className="h-[50%] md:w-[40%]">
                <motion.img
                    whileHover={{ scale: 1.04, cursor: 'pointer' }}
                    whileTap={{ scale: 1.05 }}
                    className='w-full' src={manos} alt="img" />
            </div>
        </div>
    )
}

export default Contact