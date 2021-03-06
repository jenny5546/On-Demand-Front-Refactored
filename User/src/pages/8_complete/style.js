import styled from "styled-components";

const CompleteStyle = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .Complete__BtnClose {
        float: right;
        margin: 16px;

        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: #fbfbfb;

        padding: 8px;
        box-sizing: border-box;
        transition: all 0.32s ease;
        user-select: none;
        cursor: pointer;

        &:hover {
            background: #ebebeb;
        }
        &:acitve {
            background: #dbdbdb;
        }
        svg {
            fill: #383e44;
        }
    }

    .CompleteWrap {

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 560px;
        user-select: none;

        .Complete__Title {
            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            text-align: center;
            span {
                font-weight: 700;
                color: #499fb6;
            }
        }

        .Complete__SubTitle {
            font-size: 16px;
            color: #4b4b4b;
            margin: 16px auto;
            text-align: center;
            
        }

        .Complete__UnderBar {
            width: 100%;
            height: 1px;
            background: #bbb;
            margin-bottom: 48px;
        }

        
    }

    
`;

const BtnBottom = styled.div`

    display: inline-block;
    margin-right: 16px;
    width: 100%;
    height: 48px;
    border: 1px solid ${props => (props.btnBack ? "#dbdbdb" : "#d9e7e9")};
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 48px;
    color: ${props => (props.btnBack ? "#4b4b4b" : "#499fb6")};

    transition: all 0.32s ease;
    cursor: pointer;

    &:nth-child(2) {
        margin-right: 0;
    }

    &:hover {
        background: ${props => (props.btnBack ? "#f2f2f2" : "#e7f2f4")};
    }
    &:active {
        background: ${props => (props.btnBack ? "#eee" : "#d9e7e9")};
    }
`;


export { CompleteStyle, BtnBottom };
