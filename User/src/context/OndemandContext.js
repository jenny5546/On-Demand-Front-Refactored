import React, { Component, createContext } from "react";
// import { Context } from "@emotion/stylis";

const OndemandContext = createContext();

const { Provider, Consumer: OndemandConsumer } = OndemandContext;

//Store 전체 관리 
// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.

class OndemandProvider extends Component {

    //진짜 state 는 하나, openModal(Boolean)
    //그 state를 바꾸는 handleOpenModal도 Provider에서 value로 넘겨준다. 

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

                {/* 
                    참고: 
                    
                    The React docs say that you can use props.children 
                    on components that represent ‘generic boxes’ and 
                    that ‘don’t know their children ahead of time’.

                    what {this.props.children} does is that it is used to display 
                    whatever you include between the opening and closing tags 
                    when invoking a component. 

                */}

            </Provider>
        );
    }
}

// 내보내줍니다.
export { OndemandProvider, OndemandConsumer };
