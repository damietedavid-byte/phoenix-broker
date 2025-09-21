
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import CryptoConverter from '../components/CryptoConverter';
import { DUMMY_NEWS } from '../constants';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-light-border dark:border-dark-border">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="font-semibold">{title}</span>
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="p-4 text-gray-600 dark:text-gray-400">{children}</div>}
        </div>
    )
}

const ToolsPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Tools & Education</h1>

            {/* Crypto Converter */}
            <section>
                <CryptoConverter />
            </section>
            
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Market News */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Market News</h2>
                    <Card className="max-h-[600px] overflow-y-auto">
                        <div className="space-y-4">
                            {DUMMY_NEWS.map(article => (
                                <div key={article.id} className="border-b border-light-border dark:border-dark-border pb-4 last:border-b-0 flex items-start space-x-4">
                                    <img 
                                        src={article.imageUrl || 'https://via.placeholder.com/150'} 
                                        alt={article.title} 
                                        className="w-24 h-24 object-cover rounded-md flex-shrink-0 mt-1"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{article.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{article.source} - {article.timestamp}</p>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{article.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Beginner's Guides</h2>
                    <Card>
                        <AccordionItem title="How to trade crypto & forex?">
                            Trading involves buying and selling financial assets like cryptocurrencies and foreign currencies to profit from price fluctuations. Start by educating yourself on market analysis, risk management, and choosing a reliable broker.
                        </AccordionItem>
                        <AccordionItem title="What is Technical Analysis?">
                            Technical analysis is a trading discipline employed to evaluate investments and identify trading opportunities by analyzing statistical trends gathered from trading activity, such as price movement and volume.
                        </AccordionItem>
                        <AccordionItem title="Understanding Risk Management">
                            Risk management involves identifying, analyzing, and taking steps to reduce or eliminate the risks associated with trading. Key strategies include setting stop-loss orders, diversifying your portfolio, and only risking a small percentage of your capital per trade.
                        </AccordionItem>
                         <AccordionItem title="What are Candlestick Charts?">
                            Candlestick charts are a type of financial chart for tracking the movement of securities. They originated in Japan and show the high, low, open, and closing prices of a security for a specific period.
                        </AccordionItem>
                    </Card>
                </section>
            </div>
        </div>
    );
};

export default ToolsPage;