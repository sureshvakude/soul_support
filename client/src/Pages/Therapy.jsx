import React from "react";
import therapist1 from '../assets/manovishkar.jpg';
import therapist2 from '../assets/Dr.Anjendra Targe.jpg';
import therapist3 from '../assets/heal and bloom centre.jpg';
import speciality1 from '../assets/counsellor.jpg';
import speciality2 from '../assets/Clinical Psychologist.jpg';
import speciality3 from '../assets/Psychiatrist.jpg';
import speciality4 from '../assets/behavioural therapist.jpg';
import speciality5 from '../assets/Child Psychologist.jpg';

const TherapyPage = () => {
    const therapists = [
        {
            name: "Dr. Amol D. Chaugule",
            specialty: "Consulting Psychologist, Hypnotherapist, Rehabilitation Counselor",
            clinic: "MANOVISHIKAR Mind Care Center",
            contact: "manovishar@gmail.com",
            phone: "++91 8669065990",
            location: "Shop No. 312, 3rd Floor, Krishnakunj Complex, Near Lifeline Hospital, Kesnand Phata, Pune-Nagar Road, Wagholi, Pune 412207",
            image: therapist1,
        },
        {
            name: "Dr. Anjendra Targe",
            specialty: "Psychiatry",
            clinic: "Psychiatry Clinic",
            contact: "askdranjendra@gmail.com",
            phone: "+91 9619 3285 31",
            location: "305, 3rd Floor, 'Prospero' D.P. Farm Road, Kharadi, Pune - 14",
            image: therapist2,
        },
        {
            name: "Dr. Ruth Fernandes",
            specialty: "Psychiatrist",
            clinic: "HEAL & BLOOM Centre",
            contact: "medicodream@gmail.com",
            phone: "+91 7066151000",
            location: "21, 3rd Floor, B Wing, Fountain Road Downtown City Vista, Kharadi, Pune",
            image: therapist3,
        },
    ];

    const specialties = [
        { name: "Clinical Psychologist", image: speciality2, description: "Expert in diagnosing and treating mental health issues through therapy and counseling." },
        { name: "Counselor", image: speciality1, description: "Provides guidance and support for dealing with personal and emotional challenges." },
        { name: "Psychiatrist", image: speciality3, description: "Specializes in the diagnosis, treatment, and prevention of mental health disorders." },
        { name: "Behavioral Therapist", image: speciality4, description: "Focuses on modifying harmful behaviors through behavioral therapy techniques." },
        { name: "Child Psychologist", image: speciality5, description: "Specializes in the psychological development and treatment of children." },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6VfcflwziGu1ZtDl5ycB1R/e42dbdbbfbeba1087a743ed1e853b693/GettyImages-1329854575.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
                    alt="Background"
                    className="w-full h-[40vh] md:h-[80vh] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Find a Therapist</h1>
                    <p className="text-xl">Your journey to mental well-being starts here. Connect with experienced therapists today.</p>
                </div>
            </div>

            {/* Therapist Cards Section */}
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {therapists.map((therapist, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={therapist.image} alt={therapist.name} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{therapist.name}</h2>
                                <p className="text-gray-600">{therapist.specialty}</p>
                                <p className="mt-2 text-gray-700"><strong>Clinic:</strong> {therapist.clinic}</p>
                                <p className="mt-1 text-gray-700"><strong>Contact:</strong> <a href={`mailto:${therapist.contact}`} className="text-blue-500">{therapist.contact}</a></p>
                                <p className="mt-1 text-gray-700"><strong>Phone:</strong> {therapist.phone}</p>
                                <p className="mt-1 text-gray-700"><strong>Location:</strong> {therapist.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Specialties Section */}
            <div className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Specialties</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialties.map((specialty, index) => (
                            <div key={index} className="p-6 items-center mx-auto">
                            <div className="flex flex-col items-center">
                              <img
                                src={specialty.image}
                                alt={specialty.name}
                                className="w-32 h-32 object-cover mb-4 rounded-full"
                              />
                              <h3 className="text-xl font-semibold text-gray-800">{specialty.name}</h3>
                              <p className="mt-2 text-gray-700">{specialty.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TherapyPage;