import React from "react";
import { OndemandProvider } from "./context/OndemandContext";
import Ondemand from "./pages/0_ondemand/ondemand";

function App() {
    return (
        <OndemandProvider>
            <Ondemand />
        </OndemandProvider>
    );
}

export default App;
