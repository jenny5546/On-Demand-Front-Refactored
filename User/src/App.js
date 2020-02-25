import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OndemandProvider } from "./context/OndemandContext";
import Ondemand from "./pages/0_MainPage/OnDemand";
import ModeType from "./pages/_ModePage/ModePage";


function App() {
    return (
        
        <OndemandProvider>
            <Router>
                <Switch>
                    <Route 
                        exact path="/"
                        component ={ModeType}
                    />
                    <Route
                        path="/ondemand"
                        component={Ondemand}
                    />
                </Switch>  
            </Router>
        </OndemandProvider>
         
    );
}

export default App;
