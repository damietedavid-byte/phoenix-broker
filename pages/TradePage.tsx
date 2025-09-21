import React, { useState } from 'react';
import TradingChart from '../components/TradingChart';
import OrderPanel from '../components/OrderPanel';
import OrderBook from '../components/OrderBook';
import RecentTrades from '../components/RecentTrades';
import TradePairStats from '../components/TradePairStats';
import { DUMMY_CHART_DATA } from '../constants';
import { useTradeData } from '../hooks/useTradeData';

const tradingPairs = ['BTC/USDT', 'ETH/USDT', 'EUR/USD'];

const TradePage: React.FC = () => {
  const [activePair, setActivePair] = useState(tradingPairs[0]);
  const chartData = DUMMY_CHART_DATA[activePair] || [];
  const { bids, asks, trades } = useTradeData();

  return (
    <div className="space-y-4">
      {/* Pair Selector */}
      <div className="bg-light-card dark:bg-dark-card p-2 rounded-lg shadow-sm flex space-x-2">
        {tradingPairs.map(pair => (
          <button
            key={pair}
            onClick={() => setActivePair(pair)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activePair === pair
                ? 'bg-primary text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {pair}
          </button>
        ))}
      </div>

      {/* Main Trading Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column: Order Book & Recent Trades */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-1 space-y-4">
          <OrderBook bids={bids} asks={asks} />
          <RecentTrades trades={trades} />
        </div>

        {/* Center Column: Chart & Stats */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 space-y-4">
          <TradePairStats pair={activePair} />
          <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md">
            <TradingChart data={chartData} />
          </div>
        </div>

        {/* Right Column: Order Panel */}
        <div className="col-span-12 lg:col-span-3 order-3 lg:order-3">
          <OrderPanel />
        </div>
      </div>
    </div>
  );
};

export default TradePage;