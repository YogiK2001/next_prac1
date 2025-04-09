import {ReactNode} from "react";


const Layout = ({children} : { children : ReactNode}) => {
    return (
        <div>
            <h2> This is the Layout </h2>
            { children }
        </div>
    );
};

export default Layout;