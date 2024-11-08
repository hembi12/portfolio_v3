// src/components/contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Validación del formulario
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
        }
        if (!formData.subject) newErrors.subject = "Please select a subject";
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            setErrors({});
            setSubmitted(true);
            console.log("Form submitted", formData);
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white px-4">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">Contact</h2>
                <p className="text-center text-gray-600 mb-6">
                    Send me an <a 
                        href="mailto:hectormartilb@gmail.com" 
                        className="text-blue-500 underline relative group"
                    >
                        email
                        <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Direct email
                        </span>
                    </a> or message to discuss possible collaborations.
                </p>
                {submitted && (
                    <p className="text-green-500 text-center mb-4">Thank you! Your message has been sent.</p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full px-3 py-2 border rounded" 
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-3 py-2 border rounded" 
                            placeholder="example@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="subject">Subject:</label>
                        <select 
                            id="subject" 
                            className="w-full px-3 py-2 border rounded bg-white"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a subject</option>
                            <option value="Project Collaboration">Project Collaboration</option>
                            <option value="Freelance Work">Freelance Work</option>
                            <option value="Job Opportunity">Job Opportunity</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
                        <textarea 
                            id="message" 
                            className="w-full px-3 py-2 border rounded" 
                            rows="5" 
                            placeholder="Please provide details about your project or inquiry..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white w-full md:w-auto px-6 py-2 font-semibold rounded hover:bg-blue-600 hover:text-white transition-colors">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;