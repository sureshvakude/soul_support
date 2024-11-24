import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between py-4 flex-wrap">
                    <div className="flex items-center space-x-4">
                        <Link to='/home' className='flex items-center'>
                        <img
                            src="https://images.vexels.com/media/users/3/235447/isolated/preview/bf1d3d610540bbc29a5af67c30ad69bc-brain-stroke-icon-top-view.png"
                            alt="SoulSupport Logo"
                            className="w-12 md:w-16"
                        />
                        <span className='text-md lg:text-2xl font-bold font-[poppins]'>SOULSUPPORT</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex flex-wrap items-center space-x-2 md:space-x-4">
                        <li>
                            <a
                                href="#about"
                                className="text-green-600 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 text-sm md:text-base"
                            >
                                WHO WE ARE
                            </a>
                        </li>
                        <li>
                            <a
                                href="#offer"
                                className="text-green-600 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 text-sm md:text-base"
                            >
                                WHAT WE OFFER
                            </a>
                        </li>
                        {/* Services Dropdown */}
                        <li
                            className="relative"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="text-green-600 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 text-sm md:text-base">
                                OUR SERVICES
                            </button>
                            <div
                                className={`absolute left-0 w-48 bg-white shadow-lg rounded-md ${isServicesOpen ? 'block' : 'hidden'} z-50`}
                            >
                                <ul className="py-2">
                                    <li>
                                        <Link to="/books">
                                            <span className="block w-full text-start px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Book
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/musics">
                                            <button className="block w-full text-start px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Music
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/quotes">
                                            <button className="block w-full text-start px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Quotes
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/therapy">
                                            <button className="block w-full text-start px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Therapy
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="http://localhost:8501/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ai-robot-assistant-3d-icon-download-in-png-blend-fbx-gltf-file-formats--futuristic-helper-digital-bot-robotics-pack-future-technology-icons-9862032.png" alt="Assistant" className="w-12" />
                            </Link>
                        </li>
                    </ul>

                    {/* Hamburger Menu (Mobile View) */}
                    <button
                        className="md:hidden text-green-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed inset-0 bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col items-center space-y-4 py-8">
                    <li>
                        <a
                            href="#about"
                            className="text-green-600 font-semibold text-lg"
                        >
                            WHO WE ARE
                        </a>
                    </li>
                    <li>
                        <a
                            href="#offer"
                            className="text-green-600 font-semibold text-lg"
                        >
                            WHAT WE OFFER
                        </a>
                    </li>
                    <li>
                        <Link to="/books">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg">
                                Book
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/musics">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg">
                                Music
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/quotes">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg">
                                QUOTES
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/therapy">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg">
                                Therapy
                            </button>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="http://localhost:8501/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-lg">
                                Assistant
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;