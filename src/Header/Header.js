import React, { useState } from "react";

function Header() {
    const [lightModeEnabled, setMode] = useState(true);

    const changeLightMode = () => {};

    return (
        <div className="flex bg-zinc-300 w-full h-20 justify-center border-b-black border-b-2 items-center">
            <div className="flex items-center w-full absolute justify-center h-20">
                <span className="font-sans text-xl antialiased font-bold">
                    neyrodeku.com
                </span>
            </div>
            <div className="flex ml-auto items-center flex-col">
                <div className="flex mr-20">
                    <span className="font-sans text-lg antialiased font-bold">
                        Dark mode:
                    </span>
                </div>
                <div className="flex bg-zinc-400 dark:bg-zinc-700 mr-20 z-10 justify-center items-center h-5 w-14 rounded-2xl ">
                    <svg
                        width="20px"
                        height="20px"
                        className="mr-auto animate-moveRight"
                    >
                        <circle
                            cx="10"
                            cy="10"
                            r="8"
                            stroke="white"
                            strokeWidth="4"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;
