import { useState, useEffect, useRef } from 'react';
import { Order, Trade } from '../types';

const MAX_ORDERS_DISPLAYED = 12;
const MAX_TRADES_DISPLAYED = 15;
const BASE_PRICE = 67000;

// Helper to generate initial orders
const generateInitialOrders = (count: number, startPrice: number, isBid: boolean): Order[] => {
    return Array.from({ length: count }).map((_, i) => {
        const price = isBid ? startPrice - i * 0.5 : startPrice + i * 0.5;
        const amount = Math.random() * 2;
        return { price, amount, total: price * amount };
    }).sort((a, b) => isBid ? b.price - a.price : a.price - b.price);
};

export const useTradeData = () => {
    const [bids, setBids] = useState<Order[]>(() => generateInitialOrders(MAX_ORDERS_DISPLAYED, BASE_PRICE, true));
    const [asks, setAsks] = useState<Order[]>(() => generateInitialOrders(MAX_ORDERS_DISPLAYED, BASE_PRICE + 0.5, false));
    const [trades, setTrades] = useState<Trade[]>([]);
    
    // useRef to avoid including bids/asks in useEffect dependency array, which would reset the interval
    const bidsRef = useRef(bids);
    bidsRef.current = bids;
    const asksRef = useRef(asks);
    asksRef.current = asks;

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate order book updates by replacing a random order
            const updateOrderBook = (prevOrders: Order[], isBid: boolean) => {
                const newOrders = [...prevOrders];
                const randomIndex = Math.floor(Math.random() * newOrders.length);
                const priceFluctuation = (Math.random() - 0.5) * 2;
                const newPrice = newOrders[randomIndex].price + priceFluctuation;
                const newAmount = Math.random() * 1.5;
                newOrders[randomIndex] = { price: newPrice, amount: newAmount, total: newPrice * newAmount };
                return newOrders.sort((a, b) => isBid ? b.price - a.price : a.price - b.price);
            };

            setBids(prev => updateOrderBook(prev, true));
            setAsks(prev => updateOrderBook(prev, false));

            // Add a new trade based on current spread
            setTrades(prevTrades => {
                const topBid = bidsRef.current[0]?.price || BASE_PRICE;
                const bottomAsk = asksRef.current[0]?.price || BASE_PRICE + 0.5;

                const newTrade: Trade = {
                    time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                    price: topBid + Math.random() * (bottomAsk - topBid),
                    amount: Math.random() * 0.5,
                    type: Math.random() > 0.5 ? 'buy' : 'sell',
                };
                const updatedTrades = [newTrade, ...prevTrades];
                if (updatedTrades.length > MAX_TRADES_DISPLAYED) {
                    updatedTrades.pop();
                }
                return updatedTrades;
            });
        }, 1500); // update every 1.5 seconds

        return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect runs once on mount

    return { bids, asks, trades };
};
