import React from "react";

const Header = React.lazy(() => import("./Header/Header"));
const Main = React.lazy(() => import("./Main/Main"));

function App() {
    return (
        <div className="bg-stone-300 flex w-full h-full flex-col">
            <Header />
            <Main />
        </div>
    );
}

export default App;
