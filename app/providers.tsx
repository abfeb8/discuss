'use client';

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        // session provider is required to use useSession hook in client component 
        <SessionProvider>
            <HeroUIProvider>{children}</HeroUIProvider>
        </SessionProvider>
    );
}