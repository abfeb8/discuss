'use client';

import {
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@heroui/react";
import Link from "next/link";
import HeaderAuth from "./header-auth";

export default function Header() {

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
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    );
}