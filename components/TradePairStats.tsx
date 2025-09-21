
import React, { useState, useEffect } from 'react';

interface TradePairStatsProps {
  pair: string;
}

interface Stats {
  lastPrice: string;
  change: string;
  changePercent: string;
  high: string;
  low:string;
  volume: string;
}

const generateDummyStats = (pair: string): Stats => {
    const isCrypto = pair.includes('USDT');
    const basePrice = isCrypto ? (pair.startsWith('BTC') ? 67050 : 3410) : 1.0715;
    const price = basePrice * (1 + (Math.random() - 0.5) * 0.05);
    const dailyChange = price * (Math.random() - 0.5) * 0.1;
    const changePercent = (dailyChange / (price - dailyChange)) * 100;
    const high = price * 1.05;
    const low = price * 0.95;
    const volume = Math.random() * (isCrypto ? 5000 : 100000);

    return {
        lastPrice: price.toLocaleString('en-US', { minimumFractionDigits: isCrypto ? 2 : 4, maximumFractionDigits: isCrypto ? 2 : 4 }),
        change: dailyChange.toLocaleString('en-US', { minimumFractionDigits: isCrypto ? 2 : 4, maximumFractionDigits: isCrypto ? 2 : 4, signDisplay: 'always' }),
        changePercent: `${changePercent.toFixed(2)}%`,
        high: high.toLocaleString('en-US', { minimumFractionDigits: isCrypto ? 2 : 4, maximumFractionDigits: isCrypto ? 2 : 4 }),
        low: low.toLocaleString('en-US', { minimumFractionDigits: isCrypto ? 2 : 4, maximumFractionDigits: isCrypto ? 2 : 4 }),
        volume: `${Math.round(volume).toLocaleString()} ${pair.split('/')[0]}`,
    }
}


const TradePairStats: React.FC<TradePairStatsProps> = ({ pair }) => {
    const [stats, setStats] = useState<Stats>(generateDummyStats(pair));

    useEffect(() => {
        setStats(generateDummyStats(pair));
        const interval = setInterval(() => {
            setStats(generateDummyStats(pair));
        }, 3000);
        return () => clearInterval(interval);
    }, [pair]);

    const isPositive = !stats.change.startsWith('-');
    
    const StatItem: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className }) => (
        <div className={`text-center md:text-left ${className}`}>
            <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-sm font-semibold">{value}</p>
        </div>
    );

    return (
        <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                <div className="col-span-2 md:col-span-1">
                    <p className="text-lg font-bold">{pair}</p>
                    <p className={`text-xl font-bold ${isPositive ? 'text-secondary' : 'text-danger'}`}>{stats.lastPrice}</p>
                </div>
                 <StatItem label="24h Change" value={`${stats.change} (${stats.changePercent})`} />
                 <StatItem label="24h High" value={stats.high} />
                 <StatItem label="24h Low" value={stats.low} />
                 <StatItem label="24h Volume" value={stats.volume} />
            </div>
        </div>
    );
};

export default TradePairStats;