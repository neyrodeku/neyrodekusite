import React from "react";

function Abilities() {
    return (
        <div className="flex flex-col justify-center mt-16">
            <span className="font-sans flex text-2xl antialiased justify-center">
                My abilities
            </span>
            <div className="flex flex-row justify-between w-96 mt-4">
                <div className="flex flex-col items-start">
                    <ul className="space-y-3 flex flex-col items-center">
                        <li className="font-sans text-lg antialiased">
                            html/css/js
                        </li>
                        <li className="font-sans text-lg antialiased">
                            typescript
                        </li>
                        <li className="font-sans text-lg antialiased">
                            reactJs/reactTs
                        </li>
                        <li className="font-sans text-lg antialiased">
                            reduxJs
                        </li>
                        <li className="font-sans text-lg antialiased">
                            cross-browser layout
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end">
                    <ul className="space-y-3 flex flex-col items-center">
                        <li className="font-sans text-lg antialiased">
                            tailwind
                        </li>
                        <li className="font-sans text-lg antialiased">git</li>
                        <li className="font-sans text-lg antialiased">json</li>
                        <li className="font-sans text-lg antialiased">
                            webpack
                        </li>
                        <li className="font-sans text-lg antialiased">
                            backend(express.js)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Abilities;
