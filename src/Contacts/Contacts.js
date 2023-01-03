import React from "react";

function Contacts() {
    return (
        <div className="flex flex-col justify-center items-center mt-16">
            <span className="flex justify-center font-sans text-2xl antialiased dark:text-white">
                Contacts
            </span>
            <div className="flex flex-col justify-center items-center mt-4">
                <ul className="space-y-3 flex flex-col items-center">
                    <li className="font-sans text-lg antialiased dark:text-white">
                        telegram:
                        <a href="t.me/sayouwtg"> t.me/sayouwtg</a>
                    </li>
                    <li className="font-sans text-lg antialiased dark:text-white">
                        facebook:
                        <a href="www.facebook.com/neyrodeku/">
                            {" "}
                            facebook.com/neyrodeku/
                        </a>
                    </li>
                    <li className="font-sans text-lg antialiased dark:text-white">
                        email: neyrodeku@gmail.com
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center mt-7">
                <span className="font-sans text-lg antialiased dark:text-white">
                    this website is open source, so you can get code from{" "}
                    <a href="https://github.com/neyrodeku/neyrodekusite" className="font-bold">here</a>
                </span>
            </div>
        </div>
    );
}

export default Contacts;
