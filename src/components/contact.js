// src/components/contact.js
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white px-4">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Contacto</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="w-full px-3 py-2 border rounded" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border rounded" placeholder="Tu email" />
                    </div>
                    <div>
                        <label className="block text-gray

-700 mb-2" htmlFor="message">Mensaje</label>
                        <textarea id="message" className="w-full px-3 py-2 border rounded" rows="5" placeholder="Tu mensaje"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full md:w-auto px-6 py-2 rounded">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;