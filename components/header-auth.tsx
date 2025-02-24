'use client'

import { signIn, signOut } from "@/actions";
import { Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
    const session = useSession();

    if (session.status === 'loading') {
        return null;
    }
    else if (session.data?.user) {
        return (
            <Popover placement="bottom">
                <PopoverTrigger>
                    <Avatar src={session.data.user.image || ""} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                        <form action={signOut}>
                            <Button type="submit">Sign Out</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        );
    } else {
        return <>
            <NavbarItem>
                <form action={signIn}>
                    <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
                </form>
            </NavbarItem>

            <NavbarItem>
                <form action={signIn}>
                    <Button type="submit" color="primary" variant="flat">Sign Up</Button>
                </form>
            </NavbarItem>
        </>;
    }
}