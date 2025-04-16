import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import { auth } from "@/l"

const Nav = async () => {
    const session = await auth();


    return (
        <header className="px-5 py-3 bg-white font-work-sans" >
            <nav className="flex flex-row justify-between items-center" >
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="felx items-center gap-5 text-black" >
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <button onClick={() => signOut()} >
                                SignOut
                            </button>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user.name}</span>
                            </Link>
                        </>
                    ): (
                        <button onClick={() => signIn('github')} >
                            <span> SignIn </span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;