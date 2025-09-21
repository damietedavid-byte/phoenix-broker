
import React from 'react';
import Card from '../components/ui/Card';

const PrivacyPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <Card>
                <div className="prose dark:prose-invert max-w-none">
                    <p>Last updated: July 28, 2024</p>
                    
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, complete a transaction, or contact us for support. This may include your name, email address, and other identifying information. This is a placeholder document.</p>
                    
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to provide, maintain, and improve our services. This includes using the information to:
                        <ul>
                            <li>Process transactions and send you related information.</li>
                            <li>Verify your identity and prevent fraud.</li>
                            <li>Communicate with you about products, services, and events.</li>
                        </ul>
                    </p>
                    
                    <h2>3. Information Sharing</h2>
                    <p>We do not share your personal information with third parties except as described in this Privacy Policy, such as with your consent, with our service providers, or for legal reasons.</p>
                    
                    <h2>4. Data Security</h2>
                    <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
                </div>
            </Card>
        </div>
    );
};

export default PrivacyPage;