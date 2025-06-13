'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFacebook, FaLine, } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Container from './Container';
import { menuItems } from '@/data/menuItems';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-primary fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-primary md:bg-transparent mx-auto flex justify-between items-center py-1 px-4 md:py-10 ">
                    {/* Logo */}
                    <Link href="/" className=" -inset-1 items-center">
                        <div className="w-32 h-10 relative">
                            <Image
                                src="/images/icons/logo.svg"
                                alt="Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-white hover:text-secondary transition-colors">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-white bg-primary-accent hover:bg-secondary px-4 py-2 rounded-full transition-colors">
                                ติดต่อด่วน
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex gap-3 items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary-accent text-white hover:bg-white hover:text-black focus:outline-none rounded-full px-1 py-1 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-9">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-white hover:text-secondary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="flex items-center gap-3">

                            <Link className='hover:bg-black text-white rounded-full' href='https://line.me/ti/p/~@bigapplestore'>
                                <FaLine className='size-6 md:size-9' />
                            </Link>
                            <Link className='hover:bg-black text-white rounded-full' href='https://www.facebook.com/bigapplestore824/'>
                                <FaFacebook className='dark:invert size-6 md:size-9' />
                            </Link>
                            <Link className='hover:bg-black text-white rounded-full' href='tel: 080-583-9761'>
                                <IoCall className='dark:invert size-6 md:size-9' />
                            </Link>
                            <Link href="tel: 080-583-9761" className="text-white bg-primary-accent hover:bg-white hover:text-black px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                ติดต่อด่วน
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
