import React, { Component, createContext } from "react";
import { Context } from "@emotion/stylis";

const OndemandContext = createContext();

const { Provider, Consumer: OndemandConsumer } = OndemandContext;


// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class OndemandProvider extends Component {

    state = {
        openModal: false
    };

    handleOpenModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    };

    render() {
        return (
            <Provider
                value={{
                    openModal: this.state.openModal,
                    handleOpenModal: this.handleOpenModal
                }}
            >
                {this.props.children}
            </Provider>
        );
    }

}

// 내보내줍니다.
export { OndemandProvider, OndemandConsumer };



