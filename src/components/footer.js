// src/components/footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} Mi Nombre. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;