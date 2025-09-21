import { CandlestickData, PortfolioAsset, NewsArticle, TopMoverAsset, Transaction } from './types';

// Dummy data for the candlestick chart
export const DUMMY_CHART_DATA: { [key: string]: CandlestickData[] } = {
  'BTC/USDT': Array.from({ length: 50 }).map((_, i) => {
    const open = 60000 + Math.random() * 2000 - 1000;
    const close = open + Math.random() * 800 - 400;
    const high = Math.max(open, close) + Math.random() * 500;
    const low = Math.min(open, close) - Math.random() * 500;
    return {
      time: `2024-07-${(i % 30) + 1}`,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
    };
  }),
  'ETH/USDT': Array.from({ length: 50 }).map((_, i) => {
    const open = 3000 + Math.random() * 200 - 100;
    const close = open + Math.random() * 80 - 40;
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;
    return {
      time: `2024-07-${(i % 30) + 1}`,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
    };
  }),
  'EUR/USD': Array.from({ length: 50 }).map((_, i) => {
    const open = 1.07 + Math.random() * 0.02 - 0.01;
    const close = open + Math.random() * 0.008 - 0.004;
    const high = Math.max(open, close) + Math.random() * 0.005;
    const low = Math.min(open, close) - Math.random() * 0.005;
    return {
      time: `2024-07-${(i % 30) + 1}`,
      open: parseFloat(open.toFixed(4)),
      high: parseFloat(high.toFixed(4)),
      low: parseFloat(low.toFixed(4)),
      close: parseFloat(close.toFixed(4)),
    };
  }),
};

// Dummy portfolio data
export const DUMMY_PORTFOLIO: PortfolioAsset[] = [
  { name: 'Bitcoin', symbol: 'BTC', amount: 0.5, valueUSD: 33500, logo: 'https://via.placeholder.com/32/F7931A/000000?text=B' },
  { name: 'Ethereum', symbol: 'ETH', amount: 10, valueUSD: 34000, logo: 'https://via.placeholder.com/32/627EEA/FFFFFF?text=E' },
  { name: 'US Dollar Tether', symbol: 'USDT', amount: 15000, valueUSD: 15000, logo: 'https://via.placeholder.com/32/26A17B/FFFFFF?text=T' },
  { name: 'Euro Balance', symbol: 'EUR', amount: 5000, valueUSD: 5350, logo: 'https://via.placeholder.com/32/003399/FFFFFF?text=€' },
];

// Dummy news data
export const DUMMY_NEWS: NewsArticle[] = [
    { id: 1, title: "Bitcoin Surges Past $68,000 as Market Sentiment Turns Bullish", source: "CoinDesk", summary: "Analysts point to increased institutional adoption and positive macroeconomic indicators...", timestamp: "2 hours ago", imageUrl: "https://via.placeholder.com/150/F7931A/FFFFFF?text=Crypto" },
    { id: 2, title: "Federal Reserve Holds Interest Rates Steady, Forex Markets React", source: "Reuters", summary: "The EUR/USD pair saw increased volatility following the announcement from the Fed chair...", timestamp: "5 hours ago", imageUrl: "https://via.placeholder.com/150/003399/FFFFFF?text=Forex" },
    { id: 3, title: "Ethereum's Dencun Upgrade: What It Means for Gas Fees", source: "The Block", summary: "The latest network upgrade aims to significantly reduce transaction costs on layer-2 solutions...", timestamp: "1 day ago", imageUrl: "https://via.placeholder.com/150/627EEA/FFFFFF?text=ETH" },
    { id: 4, title: "UK Inflation Rate Drops, GBP/USD on the Rise", source: "Bloomberg", summary: "A surprising drop in the UK's CPI has boosted confidence in the Pound Sterling...", timestamp: "2 days ago", imageUrl: "https://via.placeholder.com/150/AE1C28/FFFFFF?text=GBP" },
];

export const CRYPTO_PRICES: { [key: string]: number } = {
    'BTC': 67000,
    'ETH': 3400,
    'USDT': 1.00,
    'USD': 1.00
};

export const TOP_MOVERS: TopMoverAsset[] = [
    { symbol: 'SOL', name: 'Solana', price: 172.45, changePercent: 8.12 },
    { symbol: 'AVAX', name: 'Avalanche', price: 36.70, changePercent: 6.55 },
    { symbol: 'LINK', name: 'Chainlink', price: 18.90, changePercent: -2.34 },
    { symbol: 'DOT', name: 'Polkadot', price: 7.25, changePercent: 4.21 },
];

export const TRANSACTION_HISTORY: Transaction[] = [
    { id: 't1', type: 'Deposit', asset: 'USD', amount: 5000, valueUSD: 5000, date: '2024-07-22', status: 'Completed' },
    { id: 't2', type: 'Buy', asset: 'BTC', amount: 0.05, valueUSD: 3350, date: '2024-07-25', status: 'Completed' },
    { id: 't3', type: 'Sell', asset: 'ETH', amount: 1.2, valueUSD: 4080, date: '2024-07-24', status: 'Completed' },
    { id: 't4', type: 'Withdrawal', asset: 'EUR', amount: 1000, valueUSD: 1070, date: '2024-07-20', status: 'Completed' },
    { id: 't5', type: 'Deposit', asset: 'USDT', amount: 2000, valueUSD: 2000, date: '2024-07-18', status: 'Completed' },
];