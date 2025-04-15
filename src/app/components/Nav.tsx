import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <header className="px-5 py-3 bg-white font-work-sans" >
            <nav className="flex flex-row justify-between items-center" >
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="text-2xl" > This is the Nav Bar</div>
            </nav>
        </header>
    );
};

export default Nav;