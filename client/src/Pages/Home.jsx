import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div className="font-montserrat">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between py-4 flex-wrap">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://images.vexels.com/media/users/3/235447/isolated/preview/bf1d3d610540bbc29a5af67c30ad69bc-brain-stroke-icon-top-view.png"
                            alt="SoulSupport Logo"
                            className="w-12 md:w-16"
                        />
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
                                className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md ${isServicesOpen ? 'block' : 'hidden'} z-50`}
                            >
                                <ul className="py-2">
                                    <li>
                                        <Link to="/books">
                                            <span className="block px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Book
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/music">
                                            <button className="block px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Music
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/quotes">
                                            <button className="block px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                QUOTES
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/therapy">
                                            <button className="block px-4 py-2 text-green-600 hover:bg-green-200 rounded-md">
                                                Therapy
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a
                                href="http://localhost:8501/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ai-robot-assistant-3d-icon-download-in-png-blend-fbx-gltf-file-formats--futuristic-helper-digital-bot-robotics-pack-future-technology-icons-9862032.png" alt="Assistant" className="w-12" />
                            </a>
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
                        <Link to="/music">
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

            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/08/21/51/lake-3209994_640.jpg"
                    alt="Background"
                    className="w-full h-[40vh] md:h-[60vh] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
                    <h2 className="text-2xl md:text-4xl font-bold">THE MOST PREFERRED AND TRUSTED</h2>
                    <h3 className="text-sm md:text-xl mt-2">
                        A one stop solution to tackle all your mental problems.
                    </h3>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-8 md:py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                        WHO WE ARE
                    </h1>
                    <p className="text-sm md:text-lg leading-6 md:leading-7 text-gray-700">
                        As a team, we are very excited about our new project: a social media platform
                        designed specifically for mental health support. With the rise of social media
                        usage and its impact on mental health, we believe that creating a platform that
                        prioritizes mental health and well-being is crucial. Through our platform, we hope
                        to break down the stigma surrounding mental health by providing a supportive and
                        inclusive community. Join us on this journey to create a world where mental health
                        is given the importance it deserves.
                    </p>
                </div>
            </section>

            {/* Namaste Section */}
            <div className="bg-green-50 py-6 md:py-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Let's talk about the most un-talked yet the most important issue
                </h2>
                <p className="mt-2 text-sm md:text-lg">Remember, you are not alone. We are with you!</p>
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/08/21/51/lake-3209994_640.jpg"
                    alt="Namaste"
                    className="mx-auto mt-4 w-20 md:w-24"
                />
            </div>

            {/* What We Offer Section */}
            <section id="offer" className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                        WHAT WE OFFER
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add your offer cards here */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4">
                <div className="text-center">
                    <p className="text-sm md:text-base">&copy; 2024 SoulSupport. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
