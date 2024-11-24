import React from 'react';

export default function HomePage() {
    return (
        <div className="font-montserrat">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/08/21/51/lake-3209994_640.jpg"
                    alt="Background"
                    className="w-full h-[40vh] md:h-[80vh] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
                    <h2 className="text-2xl md:text-4xl font-bold">THE MOST PREFERRED AND TRUSTED</h2>
                    <h3 className="text-sm md:text-xl mt-2">
                        A one stop solution to tackle all your mental problems.
                    </h3>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-8 md:py-12 bg-gray-100  border-b-2 border-indigo-200">
                <div className="container mx-auto px-4 lg:px-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6">
                        WHO WE ARE
                    </h1>
                    <p className="text-sm md:text-xl leading-6 md:leading-7 text-gray-700">
                        As a team, we are very excited about our new project: a social media platform designed specifically for mental health support. With the rise of social media usage and its impact on mental health, we believe that creating a platform that prioritizes mental health and well-being is crucial. We believe that mental health is an essential part of overall health and wellbeing, and it should be given the same importance as physical health. Through our platform, we hope to break down the stigma surrounding mental health by providing a supportive and inclusive community. We are thrilled to see the impact our platform can have on individuals' mental health and wellbeing, and we invite everyone to join us on this journey. Together, we can create a world where mental health is given the importance it deserves, and individuals feel supported and connected.
                    </p>
                </div>
            </section>

            {/* Namaste Section */}
            <div className="bg-green-50 py-6 md:py-8 text-center">
                <h2 className="text-xl md:text-4xl font-semibold">
                    Let's talk about the most un-talked yet the most important issue
                </h2>
                <p className="mt-2 text-sm md:text-lg">Remember, you are not alone. We are with you!</p>
                <img
                    src="https://cdn.pixabay.com/photo/2019/07/22/14/31/heart-4355253_640.jpg"
                    alt="Namaste"
                    className="mx-auto mt-4 w-64 lg:w-1/2 rounded-xl"
                />
            </div>

            {/* What We Offer Section */}
            <section id="offer" className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                        WHAT WE OFFER
                    </h1>
                    <div className="container mx-auto px-4 lg:px-12">
                        <p className='text-sm md:text-xl leading-6 md:leading-7 text-gray-700'>
                        Our website is a safe and supportive space where you can connect with others who understand what you're going through. We offer educational articles, self-help guides, music therapy, mindfulness exercises, and access to mental health professionals to help you manage your mental health. In short, Soul Support provides the resources, support, and community you need for your mental health journey. We prioritize ease of use, keep your information safe, and focus on creating a caring community, ensuring we're here to help you every step of the way.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
