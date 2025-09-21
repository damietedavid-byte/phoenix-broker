
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Toggle from '../components/ui/Toggle';
import PortfolioChart from '../components/PortfolioChart';
import { DUMMY_PORTFOLIO, TRANSACTION_HISTORY } from '../constants';
import { PortfolioAsset, Transaction } from '../types';

type Tab = 'portfolio' | 'history' | 'settings';

const PortfolioView: React.FC = () => {
    const totalValue = DUMMY_PORTFOLIO.reduce((acc, asset) => acc + asset.valueUSD, 0);

    return (
        <Card>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-gray-500 dark:text-gray-400">Total Balance</p>
                    <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
                </div>
                <div className="space-x-2">
                    <Button variant="primary">Deposit</Button>
                    <Button variant="ghost">Withdraw</Button>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    <h3 className="text-xl font-semibold mb-4">Asset Allocation</h3>
                    <PortfolioChart data={DUMMY_PORTFOLIO} />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Your Assets</h3>
                    <div className="space-y-4">
                        {DUMMY_PORTFOLIO.map((asset: PortfolioAsset) => (
                             <div key={asset.symbol} className="flex justify-between items-center p-3 bg-light-bg dark:bg-dark-bg rounded-lg">
                                <div className="flex items-center">
                                    <img src={asset.logo} alt={asset.name} className="w-8 h-8 rounded-full mr-3"/>
                                    <div>
                                        <p className="font-bold">{asset.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{asset.amount} {asset.symbol}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">${asset.valueUSD.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
};

const HistoryView: React.FC = () => {
     const getStatusColor = (status: Transaction['status']) => {
        switch (status) {
            case 'Completed': return 'text-secondary';
            case 'Pending': return 'text-yellow-500';
            case 'Failed': return 'text-danger';
        }
    }
    const getTypeColor = (type: Transaction['type']) => {
        switch (type) {
            case 'Deposit':
            case 'Buy':
                return 'text-secondary';
            case 'Withdrawal':
            case 'Sell':
                return 'text-danger';
        }
    }

    return (
        <Card>
            <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-light-border dark:border-dark-border text-sm text-gray-500 dark:text-gray-400">
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Type</th>
                            <th className="py-2 px-4">Asset</th>
                            <th className="py-2 px-4 text-right">Amount</th>
                            <th className="py-2 px-4 text-right">Value (USD)</th>
                            <th className="py-2 px-4 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TRANSACTION_HISTORY.map(tx => (
                            <tr key={tx.id} className="border-b border-light-border dark:border-dark-border last:border-0">
                                <td className="py-3 px-4">{tx.date}</td>
                                <td className={`py-3 px-4 font-semibold ${getTypeColor(tx.type)}`}>{tx.type}</td>
                                <td className="py-3 px-4">{tx.asset}</td>
                                <td className={`py-3 px-4 text-right font-mono ${getTypeColor(tx.type)}`}>{tx.amount.toFixed(6)}</td>
                                <td className="py-3 px-4 text-right font-mono">${tx.valueUSD.toLocaleString()}</td>
                                <td className="py-3 px-4 text-center">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-opacity-10 ${getStatusColor(tx.status).replace('text-', 'bg-')} ${getStatusColor(tx.status)}`}>
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

const SettingsView: React.FC = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: false,
        push: true,
    });
    
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <h3 className="text-xl font-semibold mb-4 border-b border-light-border dark:border-dark-border pb-2">Profile Information</h3>
                <form className="space-y-4">
                    <Input label="Username" defaultValue="DemoUser" />
                    <Input label="Email" type="email" defaultValue="demo@novatrade.com" />
                    <Button type="submit">Update Profile</Button>
                </form>
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-4 border-b border-light-border dark:border-dark-border pb-2">Security</h3>
                <div className="space-y-4">
                    <Toggle label="Two-Factor Authentication (2FA)" enabled={true} onChange={() => {}} />
                    <Button>Change Password</Button>
                </div>
            </Card>
            <Card className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 border-b border-light-border dark:border-dark-border pb-2">Notification Settings</h3>
                <div className="space-y-4">
                     <Toggle 
                        label="Email Notifications" 
                        enabled={notifications.email} 
                        onChange={(val) => setNotifications(p => ({...p, email: val}))} />
                     <Toggle 
                        label="SMS Notifications" 
                        enabled={notifications.sms} 
                        onChange={(val) => setNotifications(p => ({...p, sms: val}))} />
                    <Toggle 
                        label="Push Notifications" 
                        enabled={notifications.push} 
                        onChange={(val) => setNotifications(p => ({...p, push: val}))} />
                </div>
            </Card>
        </div>
    );
};


const AccountPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('portfolio');

    const renderContent = () => {
        switch (activeTab) {
            case 'portfolio':
                return <PortfolioView />;
            case 'history':
                return <HistoryView />;
            case 'settings':
                return <SettingsView />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">My Account</h1>
            
            <div className="flex border-b border-light-border dark:border-dark-border">
                <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`px-4 py-2 font-semibold transition-colors ${activeTab === 'portfolio' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Portfolio
                </button>
                 <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-2 font-semibold transition-colors ${activeTab === 'history' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Transaction History
                </button>
                 <button
                    onClick={() => setActiveTab('settings')}
                    className={`px-4 py-2 font-semibold transition-colors ${activeTab === 'settings' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Settings
                </button>
            </div>
            
            <div>{renderContent()}</div>
        </div>
    );
};

export default AccountPage;