import React from "react";
import { OndemandConsumer } from "../../context/OndemandContext";
import { CompleteStyle, BtnBottom } from "./style";
import { Link } from 'react-router-dom';

const Complete = () => {
    
    return (
        <OndemandConsumer>
            {value => (
                <CompleteStyle>
                
                    <Link to= "/ondemand">
                        <div
                            className="Complete__BtnClose"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                            </svg>
                        </div>
            
                    </Link>
            
                    <main className="CompleteWrap">
                        <div className="Complete__Title">
                            Order number <span>#99756</span>
                        </div>
                        <div className="Complete__SubTitle">
                            Thank you for your order!
                        </div>
                        <div className="Complete__UnderBar" />
            
            
                        <Link to="/">
                            <section className="Complete__Bottom">
                                <BtnBottom btnBack >
                                    Return to Home
                                </BtnBottom>
                            </section>
                        </Link>
                        
                    </main>
                </CompleteStyle>
            )}


        </OndemandConsumer>
        
    )
}
export default Complete;