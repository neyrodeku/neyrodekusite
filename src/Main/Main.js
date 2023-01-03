import React from "react";
import avatar from "./avatar.png";
import Abilities from "../Abilities/Abilities";
import AboutMe from "../About/About";
import Contacts from "../Contacts/Contacts";

function Main() {
    return (
        <div className="flex h-full justify-center w-10/12 bg-stone-300-dark dark:bg-zinc-700 backdrop-brightness-75 mt-7 self-center rounded-3xl ">
            <div className="flex justify-center flex-col self-start w-full items-center mt-7 mb-10">
                <img
                    src={avatar}
                    className="w-60 h-60 rounded-full select-none"
                ></img>
                <div className="flex justify-center mt-3 flex-col items-center">
                    <span className="font-sans text-3xl antialiased select-none dark:text-white">
                        neyrodeku
                    </span>
                    <span className="font-sans text-xl antialiased select-none dark:text-white">
                        aka Arthur Maslov xd
                    </span>
                </div>
                <Abilities />
                <AboutMe />
                <Contacts />
            </div>
        </div>
    );
}

export default Main;
