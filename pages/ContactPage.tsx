
import React from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
    };
    
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <Card>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Have a question or need support? Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input label="Your Name" id="name" type="text" required />
                    <Input label="Your Email" id="email" type="email" required />
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
                            required
                        ></textarea>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                        Send Message
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ContactPage;