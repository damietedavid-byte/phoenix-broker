
import React from 'react';
import { useMarketData } from '../hooks/useMarketData';
import { MarketData } from '../types';

const TickerItem: React.FC<{ item: MarketData }> = ({ item }) => {
  const isPositive = item.change >= 0;
  return (
    <div className="flex-shrink-0 w-48 p-2">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.symbol}</p>
      <p className="text-lg font-semibold">{item.price.toLocaleString()}</p>
      <p className={`text-sm font-medium ${isPositive ? 'text-secondary' : 'text-danger'}`}>
        {isPositive ? '+' : ''}{item.change.toLocaleString()} ({isPositive ? '+' : ''}{item.changePercent}%)
      </p>
    </div>
  );
};

const MarketTicker: React.FC = () => {
  const marketData = useMarketData();

  return (
    <div className="bg-light-card dark:bg-dark-card py-4 border-y border-light-border dark:border-dark-border overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee-infinite">
          {marketData.map((item) => <TickerItem key={item.symbol} item={item} />)}
          {marketData.map((item) => <TickerItem key={`${item.symbol}-clone`} item={item} />)}
        </div>
        {/* FIX: Removed invalid "jsx" prop from style tag. This is a Next.js feature and not standard for React. */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MarketTicker;
