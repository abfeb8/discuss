'use client'

import { signIn, signOut } from "@/actions";
import { Avatar, Button, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
    const session = useSession()

    let authContent: React.ReactNode;
    if (session.status === 'loading') {
        authContent = null
    }
    else if (session.data?.user) {
        authContent =
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
    } else {
        authContent = <>
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
        </>
    }

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href='/' className="font-bold">Disscuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {authContent}
            </NavbarContent>
        </Navbar>
    );
}