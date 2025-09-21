
import { useState, useEffect } from 'react';
import { MarketData } from '../types';

const initialData: MarketData[] = [
  { symbol: 'BTC/USD', price: 67050.80, change: 1250.50, changePercent: 1.90 },
  { symbol: 'ETH/USD', price: 3410.20, change: -55.10, changePercent: -1.59 },
  { symbol: 'EUR/USD', price: 1.0715, change: 0.0012, changePercent: 0.11 },
  { symbol: 'GBP/USD', price: 1.2580, change: -0.0005, changePercent: -0.04 },
];

export const useMarketData = () => {
  const [marketData, setMarketData] = useState<MarketData[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData =>
        prevData.map(item => {
          const randomFactor = (Math.random() - 0.5) * 0.01; // Small random fluctuation
          const newPrice = item.price * (1 + randomFactor);
          const newChange = newPrice - (item.price - item.change);
          const newChangePercent = (newChange / (item.price - item.change)) * 100;
          return {
            ...item,
            price: parseFloat(newPrice.toFixed(item.symbol.includes('/') ? 4 : 2)),
            change: parseFloat(newChange.toFixed(item.symbol.includes('/') ? 4 : 2)),
            changePercent: parseFloat(newChangePercent.toFixed(2)),
          };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return marketData;
};
