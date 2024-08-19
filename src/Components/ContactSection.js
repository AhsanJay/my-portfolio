import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('portfolio-backend-production-e1af.up.railway.app/send-email', formData);
            alert('Message sent successfully');
        } catch (error) {
            alert('Failed to send message');
        }
    };

   return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit">Send Message</button>
        </form>
    );
}

export default ContactSection
