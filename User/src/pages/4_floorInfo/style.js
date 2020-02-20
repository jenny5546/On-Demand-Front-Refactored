import styled from "styled-components";

const FloorInfoStyle = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .FloorInfo__BtnClose {
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

    .FloorInfoWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 560px;
        user-select: none;

        .FloorInfo__Title {
            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            margin-bottom: 8px;
            text-align: center;

            span {
                font-size: 14px;
                color: #499fb6;
                margin-left: 32px;
            }
        }

        .FloorInfo__UnderBar {
            width: 100%;
            height: 1px;
            background: #bbb;
        }

        .FloorInfo__Drop {
            margin-top: 24px;
            font-size: 12px;
            font-weight: 700;
            color: #499fb6;
        }
    }

    .FloorInfo__Bottom {
        margin: auto;
        margin-top: 40px;
        text-align: center;
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

const FloorInfoInput = styled.label`
    position: relative;
    display: inline-block;
    margin-top: 16px;
    margin-right: 24px;
    font-size: 12px;
    font-weight: 700;
    color: #499fb6;

    &:nth-child(4) {
        margin-right: 0;
    }

    input {
        margin-top: 8px;
        display: block;
        padding-right: ${props => props.paddingRight};
        width: ${props => props.inputWidth};
        height: 40px;
        border: 1px solid #ebebeb;
        box-sizing: border-box;

        text-align: right;
        font-size: 16px;
        color: #4b4b4b;
    }

    select {
        position: absolute;
        top: 26px;
        right: 0;
        color: #8b8b8b;
        font-size: 16px;

        display: inline-block;
        width: 64px;
        height: 40px;
        padding: 10px 15px;
        outline: 0;
        border: 0;
        border-radius: 0;
        background: #eee;

        transition: all 0.32s ease;
        appearance: none;
        cursor: pointer;

        &:hover {
            background: #ebebeb;
        }
    }

    .select__arrow {
        position: absolute;
        top: 44px;
        right: 12px;
        width: 0;
        height: 0;
        pointer-events: none;
        border-style: solid;
        border-width: 6px 4px 0 4px;
        border-color: #4b4b4b transparent transparent transparent;
    }
`;

export { FloorInfoStyle, FloorInfoInput, BtnBottom };
