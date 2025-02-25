'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession();

    return (
        session.data?.user ? <div>Signed In</div> : <div>Signed Out</div>
    );


}