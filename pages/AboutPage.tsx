
import React from 'react';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About NovaTrade</h1>
            <Card>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg">
                        Welcome to NovaTrade, your premier platform for trading cryptocurrencies and forex. Founded in 2024, our mission is to democratize access to financial markets by providing a secure, intuitive, and powerful trading experience for everyone, from absolute beginners to seasoned professionals.
                    </p>
                    <h2>Our Vision</h2>
                    <p>
                        We believe that the future of finance is digital and decentralized. Our goal is to be at the forefront of this revolution, offering our users cutting-edge tools, transparent pricing, and unparalleled security. We are committed to building a platform that is not only technologically advanced but also fosters a community of informed and successful traders.
                    </p>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>Security First:</strong> We employ state-of-the-art security measures, including cold storage, multi-factor authentication, and regular security audits to ensure your assets are always safe.</li>
                        <li><strong>User-Centric Design:</strong> Our platform is designed with you in mind. Whether you're on a desktop or mobile device, you'll find our interface clean, fast, and easy to navigate.</li>
                        <li><strong>Competitive Fees:</strong> We offer some of the most competitive fees in the industry, ensuring that you keep more of your profits.</li>
                        <li><strong>24/7 Support:</strong> Our dedicated support team is available around the clock to assist you with any questions or issues you may have.</li>
                    </ul>
                    <p>
                        Join us on our journey to build the future of trading. Open your account with NovaTrade today and unlock your financial potential.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default AboutPage;