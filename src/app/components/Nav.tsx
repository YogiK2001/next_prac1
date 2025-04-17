

import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth"

const Nav = async () => {
    const session = await auth();


    return (
        <header className="px-5 py-3 bg-white font-work-sans" >
            <nav className="flex flex-row justify-between items-center" >
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
                <div className="flex items-center gap-5 text-black" >
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user.name}</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut()
                            }} >
                                <button type={'submit'} className="text-red-500 font-bold" > Log Out </button>
                            </form>
                        </>
                    ): (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }} >
                            <button type={"submit"} >
                                Log In
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;