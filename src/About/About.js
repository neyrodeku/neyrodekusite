import React from "react";

function AboutMe() {
    return (
        <div className="flex flex-col justify-center mt-16">
            <span className="font-sans flex text-2xl antialiased justify-center">
                About me
            </span>
            <div className="flex justify-center w-full mt-4 items-center">
                <span className="flex font-sans w-3/4 text-lg antialiased">
                    My name is Arthur, I'm 17 y.o guy from Israel and working as
                    Frontend developer since 2020. I'm good in site-developing,
                    have 9200 mmr in dota 2 and 2100 max elo on faceit and good
                    guy as well.
                </span>
            </div>
        </div>
    );
}

export default AboutMe;
