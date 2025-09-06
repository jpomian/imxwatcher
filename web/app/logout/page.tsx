"use client"

import Header from "@/components/header";
import ShaderBackground from "@/components/shader-background";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GlobalNotFound() {
    const [countdown, setCountdown] = useState(3);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            router.push("/");
        }
    }, [countdown, router]);
    return (
        <ShaderBackground>
            <Header />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-2xl w-full px-6">
                <div className="text-center space-y-8">
                    <h1 className="font-mono text-4xl md:text-7xl text-white/90 font-bold tracking-wider">Logged out</h1>
                    <div className="h-1 w-32 bg-white/60 mx-auto rounded-full"></div>
                    <h2 className="text-lg text-white/90">({countdown}) Successfully disconnected Immutable Passport.</h2>
                </div>
            </div>
        </ShaderBackground>
    )
}