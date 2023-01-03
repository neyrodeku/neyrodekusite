import React, { useState, useRef } from "react";

function Header() {
    const [lightModeEnabled, setMode] = useState(true);
    let buttonRef = useRef(null);

    const changeLightMode = () => {
        buttonRef.current.setAttribute("class", "");
        let html = document.getElementsByTagName("html")[0];
        if (lightModeEnabled) {
            setMode(false);
            html.classList.add("dark");
            buttonRef.current.setAttribute(
                "class",
                "mr-auto animate-moveRight"
            );
        } else {
            setMode(true);
            html.classList.remove("dark");
            buttonRef.current.setAttribute("class", "ml-auto animate-moveLeft");
        }
    };

    return (
        <div className="flex bg-zinc-300 dark:bg-zinc-600 w-full h-20 justify-center border-b-black border-b-2 items-center dark:border-b-white">
            <div className="flex items-center w-full absolute justify-center h-20 cursor-pointer">
                <span
                    className="font-sans text-xl antialiased font-bold border-b-black link-underline link-underline-black dark:text-white"
                    id="site-title"
                >
                    neyrodeku.com
                </span>
            </div>
            <div className="flex ml-auto items-center flex-col">
                <div className="flex mr-20">
                    <span className="font-sans text-lg antialiased font-bold dark:text-white">
                        Dark mode:
                    </span>
                </div>
                <div
                    className="flex bg-zinc-400 dark:bg-zinc-700 mr-20 z-10 justify-center items-center h-5 w-14 rounded-2xl cursor-pointer"
                    onClick={() => changeLightMode()}
                >
                    <svg
                        width="20px"
                        height="20px"
                        id="button-svg"
                        className="mr-auto"
                        ref={buttonRef}
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
