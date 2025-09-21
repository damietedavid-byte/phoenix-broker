
import React from 'react';
import Card from '../components/ui/Card';

const TermsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
            <Card>
                 <div className="prose dark:prose-invert max-w-none">
                    <p>Last updated: July 28, 2024</p>
                    <h2>1. Agreement to Terms</h2>
                    <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. This is a placeholder document.</p>
                    
                    <h2>2. Your Account</h2>
                    <p>You are responsible for safeguarding your account and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

                    <h2>3. Trading Risks</h2>
                    <p>Trading financial instruments, including cryptocurrency and forex, involves significant risk and is not suitable for all investors. You should be aware of the risks and be willing to accept them in order to invest in these markets. Do not trade with money you cannot afford to lose.</p>

                    <h2>4. Prohibited Uses</h2>
                    <p>You may not use our service for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of the service.</p>

                    <h2>5. Termination</h2>
                    <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                </div>
            </Card>
        </div>
    );
};

export default TermsPage;