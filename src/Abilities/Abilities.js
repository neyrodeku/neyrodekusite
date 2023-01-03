import React from "react";

function Abilities() {
    return (
        <div className="flex flex-col justify-center mt-16">
            <span className="font-sans flex text-2xl antialiased justify-center dark:text-white">
                Abilities
            </span>
            <div className="flex flex-row justify-between mt-4 w-full">
                <div className="flex flex-col items-start">
                    <ul className="space-y-3 flex flex-col items-center">
                        <li className="font-sans text-lg antialiased dark:text-white">
                            html/css/js
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            typescript
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            reactJs/reactTs
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            reduxJs
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            cross-browser layout
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end">
                    <ul className="space-y-3 flex flex-col items-center">
                        <li className="font-sans text-lg antialiased dark:text-white">
                            tailwind
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            git
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">json</li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            webpack
                        </li>
                        <li className="font-sans text-lg antialiased dark:text-white">
                            backend(express.js)
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center mt-11">
                <span className="font-sans text-lg antialiased dark:text-white">
                    as well as have knowledge in python, B2 english,
                    nginx/apache and etc
                </span>
            </div>
        </div>
    );
}

export default Abilities;
