'use client';

import { useEffect } from 'react';
import { passportInstance } from '../../utils/passport';
import ShaderBackground from '@/components/shader-background';

export default function Redirect() {
    useEffect(() => {
        if (passportInstance) {
            // #doc passport-login-callback
            passportInstance.loginCallback()
                // #enddoc passport-login-callback
                .then(() => {
                    console.log('Login callback successful');
                    if (window.opener) {
                        window.opener.postMessage('authComplete', window.origin);
                        window.close();
                    }
                })
                .catch((error) => {
                    console.error('Error in login callback:', error);
                });
        }
    }, []);

    return (
        <ShaderBackground>
            <div className="absolute top-1/2 left-1/2 p-12">
                <h1 className="text-4xl font-bold mb-8">Logged in</h1>
            </div>
        </ShaderBackground>
    );
}