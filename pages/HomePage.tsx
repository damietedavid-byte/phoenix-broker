import React from 'react';
import { Link } from 'react-router-dom';
import MarketTicker from '../components/MarketTicker';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { IconShieldCheck } from '../components/icons/IconShieldCheck';
import { IconTrendingUp } from '../components/icons/IconTrendingUp';
import { IconClock } from '../components/icons/IconClock';
import { TOP_MOVERS } from '../constants';
import { TopMoverAsset } from '../types';
import { IconUserPlus, IconCreditCard, IconChartBar } from '../components/icons/StepIcons';
import { CryptoIcon } from '../components/icons/CryptoIcons';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="text-center transition-transform transform hover:scale-105">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
            {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </Card>
);

const MoverCard: React.FC<{ asset: TopMoverAsset }> = ({ asset }) => {
    const isPositive = asset.changePercent >= 0;
    return (
        <Card className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-light-bg dark:bg-dark-bg p-2">
                    <CryptoIcon symbol={asset.symbol} />
                </div>
                <div>
                    <p className="font-bold">{asset.symbol}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{asset.name}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">${asset.price.toFixed(2)}</p>
                <p className={`text-sm font-medium ${isPositive ? 'text-secondary' : 'text-danger'}`}>
                    {isPositive ? '+' : ''}{asset.changePercent.toFixed(2)}%
                </p>
            </div>
        </Card>
    )
}

const StepCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="text-center relative">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-light-card dark:bg-dark-card shadow-lg mb-4 text-primary z-10 relative">
            {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 px-4">{children}</p>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-2">
          Trade Crypto & Forex with Confidence.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
          Secure, reliable, and easy to use for beginners and pros alike. Start your trading journey with NovaTrade today.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/auth">
            <Button size="lg" variant="primary">Get Started</Button>
          </Link>
          <Link to="/trade">
            <Button size="lg" variant="ghost">View Market</Button>
          </Link>
        </div>
      </section>

      {/* Market Ticker */}
      <MarketTicker />
      
      {/* Top Movers */}
      <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Top Movers</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Discover today's trending assets in the market.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOP_MOVERS.map(asset => <MoverCard key={asset.symbol} asset={asset} />)}
        </div>
      </section>

      {/* How it Works Section */}
        <section className="py-16 bg-light-card dark:bg-dark-card rounded-lg">
            <div className="container mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Get Started in 3 Easy Steps</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Start your trading journey with us today.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-y-16 md:gap-x-8 relative">
                    {/* Desktop Connector */}
                    <div className="absolute top-8 left-0 w-full hidden md:block">
                        <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 mx-8 lg:mx-16"></div>
                    </div>
                    {/* Mobile Connector */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-full md:hidden">
                        <div className="border-l-2 border-dashed border-gray-300 dark:border-gray-600 h-full"></div>
                    </div>

                    <StepCard icon={<IconUserPlus className="w-8 h-8" />} title="1. Create Account">
                        Sign up for a free account in minutes and complete our secure verification process.
                    </StepCard>
                    <StepCard icon={<IconCreditCard className="w-8 h-8" />} title="2. Fund Your Wallet">
                        Easily deposit funds using a variety of payment methods, including bank transfer and crypto.
                    </StepCard>
                    <StepCard icon={<IconChartBar className="w-8 h-8" />} title="3. Start Trading">
                        You're all set! Access global markets and start trading your favorite assets.
                    </StepCard>
                </div>
            </div>
        </section>


      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose NovaTrade?</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Everything you need in a modern trading platform.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<IconShieldCheck className="w-6 h-6"/>} title="Secure Accounts">
                Your funds are protected with industry-leading security protocols and multi-factor authentication.
            </FeatureCard>
            <FeatureCard icon={<IconTrendingUp className="w-6 h-6"/>} title="Low Fees">
                Enjoy competitive, transparent pricing with some of the lowest fees in the market.
            </FeatureCard>
            <FeatureCard icon={<IconClock className="w-6 h-6"/>} title="24/7 Support">
                Our dedicated support team is available around the clock to assist you with any inquiries.
            </FeatureCard>
        </div>
      </section>
    </div>
  );
};

export default HomePage;