import React from 'react';
import { Trade } from '../types';

interface RecentTradesProps {
    trades: Trade[];
}

const RecentTrades: React.FC<RecentTradesProps> = ({ trades }) => {
  return (
    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md h-full text-xs">
      <h3 className="text-lg font-semibold mb-2">Recent Trades</h3>
      <div className="grid grid-cols-3 gap-2 font-mono text-gray-500 dark:text-gray-400 mb-2">
        <span>Time</span>
        <span className="text-right">Price (USDT)</span>
        <span className="text-right">Amount (BTC)</span>
      </div>
      <div className="space-y-1">
        {trades.map((trade, i) => (
          <div key={`${trade.time}-${i}`} className="grid grid-cols-3 gap-2">
            <span className="text-gray-500 dark:text-gray-400">{trade.time}</span>
            <span className={`text-right ${trade.type === 'buy' ? 'text-secondary' : 'text-danger'}`}>
              {trade.price.toFixed(2)}
            </span>
            <span className="text-right">{trade.amount.toFixed(6)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrades;
