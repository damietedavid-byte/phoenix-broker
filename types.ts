export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface Order {
  price: number;
  amount: number;
  total: number;
}

export interface Trade {
  time: string;
  price: number;
  amount: number;
  type: 'buy' | 'sell';
}

export interface PortfolioAsset {
  name: string;
  symbol: string;
  amount: number;
  valueUSD: number;
  logo: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  source: string;
  summary: string;
  timestamp: string;
  imageUrl?: string;
}

export interface TopMoverAsset {
    symbol: string;
    name: string;
    price: number;
    changePercent: number;
}

export interface Transaction {
    id: string;
    type: 'Deposit' | 'Withdrawal' | 'Buy' | 'Sell';
    asset: string;
    amount: number;
    valueUSD: number;
    date: string;
    status: 'Completed' | 'Pending' | 'Failed';
}