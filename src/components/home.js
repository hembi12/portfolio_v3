// src/components/home.js
import React from 'react';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">¡Bienvenido a Mi Portfolio!</h1>
                <p className="text-lg md:text-xl lg:text-2xl">Desarrollador Web | Diseñador | Freelancer</p>
            </div>
        </section>
    );
}

export default Home;