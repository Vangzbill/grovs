'use client';

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export function LogoutButton() {
    return (
        <Button color="danger" onPress={() => signOut({ callbackUrl: '/' })}>
            Logout
        </Button>
    );
}