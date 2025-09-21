
import React, { useState, useContext } from 'react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Toggle from '../components/ui/Toggle';
import { IconGoogle } from '../components/icons/IconGoogle';
import { IconFacebook } from '../components/icons/IconFacebook';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [use2FA, setUse2FA] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    if (!authContext) return null;
    const { login } = authContext;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if(isLogin) {
            console.log('Logging in with', { email, password });
        } else {
            console.log('Signing up with', { username, email, password });
        }
        login({ username: isLogin ? 'DemoUser' : username, email });
        navigate('/account');
    }

    return (
        <div className="flex items-center justify-center py-12">
            <div className="w-full max-w-md">
                <Card>
                    <div className="flex border-b border-light-border dark:border-dark-border mb-6">
                        <button onClick={() => setIsLogin(true)} className={`flex-1 py-3 text-center font-semibold transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>
                            Login
                        </button>
                        <button onClick={() => setIsLogin(false)} className={`flex-1 py-3 text-center font-semibold transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>
                            Sign Up
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && <Input label="Username" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} required />}
                        <Input label="Email" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                        <Input label="Password" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                        
                        {!isLogin && (
                            <div className="pt-2">
                               <Toggle label="Enable Two-Step Authentication" enabled={use2FA} onChange={setUse2FA} />
                            </div>
                        )}

                        <Button type="submit" variant="primary" className="w-full !mt-6">
                            {isLogin ? 'Login' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-light-border dark:border-dark-border" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-light-card dark:bg-dark-card text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="ghost" className="w-full border border-light-border dark:border-dark-border !text-gray-700 dark:!text-gray-300">
                           <IconGoogle className="w-5 h-5 mr-2"/> Google
                        </Button>
                        <Button variant="ghost" className="w-full border border-light-border dark:border-dark-border !text-gray-700 dark:!text-gray-300">
                           <IconFacebook className="w-5 h-5 mr-2"/> Facebook
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AuthPage;