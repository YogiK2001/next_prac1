"use client";

import {useEffect} from "react";

function Hello() {
    useEffect(
        () => {
            console.log("Hello This is Client Side Component");
        },[])
    console.log("Hello This is Client Side Component");
    return <div>
        Hello BS
    </div>
}

export default Hello;