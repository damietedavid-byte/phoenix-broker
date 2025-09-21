
import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const OrderPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [total, setTotal] = useState('');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    if (price) {
      setTotal((parseFloat(newAmount) * parseFloat(price)).toFixed(2));
    }
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    if (amount) {
      setTotal((parseFloat(amount) * parseFloat(newPrice)).toFixed(2));
    }
  };

  const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTotal = e.target.value;
      setTotal(newTotal);
      if(price && parseFloat(price) > 0) {
          setAmount((parseFloat(newTotal) / parseFloat(price)).toFixed(6));
      }
  }


  return (
    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md h-full">
      <div className="flex border-b border-light-border dark:border-dark-border mb-4">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-2 text-center font-semibold transition-colors ${
            activeTab === 'buy' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 py-2 text-center font-semibold transition-colors ${
            activeTab === 'sell' ? 'text-danger border-b-2 border-danger' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Sell
        </button>
      </div>
      <form className="space-y-4">
        <Input label="Price (USDT)" type="number" placeholder="0.00" value={price} onChange={handlePriceChange} />
        <Input label="Amount (BTC)" type="number" placeholder="0.000000" value={amount} onChange={handleAmountChange}/>
        <Input label="Total (USDT)" type="number" placeholder="0.00" value={total} onChange={handleTotalChange}/>
        <Button
          type="submit"
          variant={activeTab === 'buy' ? 'secondary' : 'danger'}
          className="w-full"
        >
          {activeTab === 'buy' ? 'Buy BTC' : 'Sell BTC'}
        </Button>
      </form>
       <div className="text-center mt-6">
            <Button variant="ghost">Try Demo Trading</Button>
            <p className="text-xs text-gray-500 mt-1">No sign-up required.</p>
        </div>
    </div>
  );
};

export default OrderPanel;
