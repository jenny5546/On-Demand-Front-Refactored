import styled from "styled-components";

const FloorDetailStyle = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .FloorDetailWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        user-select: none;

        .FloorDetail__Title {
            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            margin-bottom: 64px;
            text-align: center;
        }
    }

    .FloorDetail__BtnClose {
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

    .FloorDetail__ListWrap {
        width: 498px;
        margin: auto;
    }

    .FloorDetail__Bottom {
        margin: auto;
        margin-top: 88px;
        text-align: center;
    }
`;

const FloorTypeList = styled.div`
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    text-align: center;

    width: 240px;
    height: 56px;
    background: #40474e;

    font-size: 14px;
    font-weight: 700;
    line-height: 56px;
    color: #eee;

    transition: all 0.32s ease;
    cursor: pointer;

    &:nth-child(2),
    &:nth-child(4) {
        margin-right: 0;
    }

    &:hover,
    &:active {
        background: #2d3236;
    }
`;

const FloorTypeInput = styled.div`
    margin-top: 24px;
    label {
        font-size: 14px;
        font-weight: 700;
        color: #499fb6;
    }

    input {
        float: right;
        text-align: right;
        width: 320px;
        padding: 8px 8px 8px 0;
        font-size: 14px;
        color: #4b4b4b;
        border: none;
        border-bottom: 1px solid #499fb6;
        background: transparent;

        transition: background-color 0.32s ease;
        &:hover {
            background: #f0f6f7;
        }
        &:focus {
            outline: none;
            color: #499fb6;
            background: #e7f2f4;
        }
    }
`;

const BtnBottom = styled.div`
    display: inline-block;
    margin-right: 16px;
    width: 240px;
    height: 48px;
    border: 1px solid ${props => (props.btnBack ? "#dbdbdb" : "#d9e7e9")};
    box-sizing: border-box;

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

export { FloorDetailStyle, FloorTypeList, FloorTypeInput, BtnBottom };
