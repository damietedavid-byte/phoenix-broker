import React from 'react';
import { Order } from '../types';

interface OrderBookProps {
  bids: Order[];
  asks: Order[];
}

const OrderBook: React.FC<OrderBookProps> = ({ bids, asks }) => {
  const latestAskPrice = asks.length > 0 ? asks[0].price : 0;
  
  return (
    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md h-full text-xs flex flex-col">
      <h3 className="text-lg font-semibold mb-2">Order Book</h3>
      <div className="grid grid-cols-3 gap-2 font-mono text-gray-500 dark:text-gray-400 mb-2">
        <span>Price (USDT)</span>
        <span className="text-right">Amount (BTC)</span>
        <span className="text-right">Total (USDT)</span>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col-reverse">
        {/* Asks (Sell Orders) are reversed to show best price near the middle */}
        {asks.map((order, i) => (
          <div key={`ask-${order.price}-${i}`} className="grid grid-cols-3 gap-2 relative">
            <span className="text-danger">{order.price.toFixed(2)}</span>
            <span className="text-right">{order.amount.toFixed(6)}</span>
            <span className="text-right">{order.total.toFixed(2)}</span>
            <div className="absolute top-0 right-0 h-full bg-danger/10" style={{ width: `${Math.min((order.amount / 2) * 100, 100)}%` }} />
          </div>
        ))}
      </div>
      <div className="my-2 py-2 border-y border-light-border dark:border-dark-border">
          <p className="text-lg font-bold text-secondary text-center">{latestAskPrice > 0 ? latestAskPrice.toFixed(2) : '---'}</p>
      </div>
      <div className="flex-1 overflow-hidden">
        {/* Bids (Buy Orders) */}
        {bids.map((order, i) => (
          <div key={`bid-${order.price}-${i}`} className="grid grid-cols-3 gap-2 relative">
            <span className="text-secondary">{order.price.toFixed(2)}</span>
            <span className="text-right">{order.amount.toFixed(6)}</span>
            <span className="text-right">{order.total.toFixed(2)}</span>
            <div className="absolute top-0 right-0 h-full bg-secondary/10" style={{ width: `${Math.min((order.amount / 2) * 100, 100)}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
