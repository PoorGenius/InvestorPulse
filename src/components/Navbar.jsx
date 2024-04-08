import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from "../constants";
import { menu, cross } from "../assets";
import MemberButton from "./MemberButton";

import { navbarSlide } from "../motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full pt-12 flex items-center justify-evenly">
            <div className="hidden sm:flex">
                <MemberButton />
            </div>
            <div className="hidden sm:flex justify">
                <ul className="flex gap-8 text-[20px] font-poppins font-normal">
                    {NAV_LINKS.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className="text-white">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex w-full justify-end mr-10 sm:hidden overflow-x-auto">
                <img
                    className="w-[32px] h-[32px] cursor-pointer z-20"
                    src={isOpen ? cross : menu}
                    alt="menu"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={navbarSlide}
                            className="absolute top-24 right-0 rounded-[25px] bg-black flex flex-row gap-4 items-center py-2 px-4 z-10"
                            id="mobile-menu"
                        >
                            {NAV_LINKS.map((link, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="list-none"
                                >
                                    <a href={link.url} className="text-white hover:text-gray-300 transition-colors duration-300">
                                        {link.title}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    );
};

export default Navbar;
