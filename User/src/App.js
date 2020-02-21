import React from "react";
import { OndemandProvider } from "./context/OndemandContext";
import Ondemand from "./pages/0_MainPage/OnDemand";

function App() {
    return (
        <OndemandProvider>
            <Ondemand />
        </OndemandProvider>
    );
}

export default App;
