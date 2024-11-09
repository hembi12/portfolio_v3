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
            </div>
        </section>
    );
}

export default Home;