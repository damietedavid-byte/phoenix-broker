
import React, { useState, useMemo } from 'react';
import Input from './ui/Input';
import { CRYPTO_PRICES } from '../constants';

const currencies = ['BTC', 'ETH', 'USDT', 'USD'];

const CryptoConverter: React.FC = () => {
    const [amount, setAmount] = useState<string>('1');
    const [fromCurrency, setFromCurrency] = useState<string>('BTC');
    const [toCurrency, setToCurrency] = useState<string>('USD');

    const convertedValue = useMemo(() => {
        const fromPrice = CRYPTO_PRICES[fromCurrency] || 0;
        const toPrice = CRYPTO_PRICES[toCurrency] || 0;
        const numericAmount = parseFloat(amount);

        if (isNaN(numericAmount) || fromPrice === 0 || toPrice === 0) {
            return '0.00';
        }

        const valueInUsd = numericAmount * fromPrice;
        const finalValue = valueInUsd / toPrice;

        return finalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }, [amount, fromCurrency, toCurrency]);
    
    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Crypto Converter</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <Input
                    label="Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
                
                <div className="flex items-center space-x-2">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
                        >
                            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <button onClick={swapCurrencies} className="p-2 mt-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        ↔
                    </button>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
                        >
                            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Converted Amount</p>
                    <p className="text-2xl font-bold text-primary">{convertedValue}</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoConverter;
