// src/components/home.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Web Developer", "Frontend Developer", "Backend Developer", "Junior Developer", "Full Stack Enthusiast"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Héctor Martil</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    <span ref={typedRef}></span>
                </p>
                {/* Botones de Call to Action */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="#projects"
                        className="bg-blue-500 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                        My Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-500 text-blue-500 px-6 py-3 rounded text-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;