'use client';

import { useState } from 'react';
import Link from 'next/link'
import { passportInstance } from '../../utils/passport';

export default function LoginWithPassport() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [accountAddress, setAccountAddress] = useState<string | null>(null);


    const loginWithPassport = async () => {
        if (!passportInstance) return;
        try {
            // #doc passport-evm-login
            const provider = await passportInstance.connectEvm();
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            // #enddoc passport-evm-login
            if (accounts) {
                setIsLoggedIn(true); // Set logged in state if login is successful
                setAccountAddress(accounts[0] || null);
            } else {
                setIsLoggedIn(false); // Ensure logged out state if necessary
            }
        } catch (error) {
            console.error('Error connecting to Passport:', error);
            setIsLoggedIn(false); // Ensure correct state on error
        }
    };

    const logout = async () => {
        if (!passportInstance || !isLoggedIn) return;
        try {
            await passportInstance.logout();
            setIsLoggedIn(false);
            setAccountAddress(null);
        } catch (error) {
            console.error('Error disconnecting:', error);
        }
    };

    return (
        <>
            <h1 className="text-xl mb-1">
                Login with Passport
            </h1>
            <button
                className="py-4 px-2 mb-1"
                onClick={!isLoggedIn ? loginWithPassport : logout}
            >
                {isLoggedIn ? 'Log Out' : 'Login'}
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Is Logged In</b></td>
                        <td id="loginStatus">{isLoggedIn ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td><b>Account Address</b></td>
                        <td id="accountAddress">{accountAddress || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Link href='/'>Return to Examples</Link>
        </>
    );
}