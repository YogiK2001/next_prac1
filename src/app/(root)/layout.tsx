import React, {ReactNode} from 'react';
import Nav from "@/app/components/Nav";

const Layout = ({children} : Readonly<{ children: ReactNode}>) => {
    return (
        <main className="font work-sans" >
            <Nav/>
            { children}
        </main>
    );
};

export default Layout;