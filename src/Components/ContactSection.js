import React, { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
             await axios.post('https://portfolio-backend-production-e1af.up.railway.app/send-email', formData);
            setSuccess('Message sent successfully');
        } catch (error) {
            setError('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
}

export default ContactSection;
