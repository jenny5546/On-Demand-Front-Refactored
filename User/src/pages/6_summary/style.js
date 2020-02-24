import styled from "styled-components";

const SummaryStyle = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .Summary__BtnClose {
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

    .SummaryWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 560px;
        user-select: none;

        .Summary__Title {
            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            text-align: center;
        }

        .Summary__SubTitle {
            font-size: 16px;
            color: #499fb6;
            margin: 16px auto;
            text-align: center;
        }

        .Summary__UnderBar {
            width: 100%;
            height: 1px;
            background: #bbb;
            margin-bottom: 16px;
        }
    }

    .Summary__Bottom {
        margin: auto;
        margin-top: 40px;
        text-align: center;
    }
`;

const SummaryContent = styled.section`
    position: relative;
    border: 1px solid #eee;
    width: 100%;
    height: 480px;
    padding: 8px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    .Summary__Content {
        padding: 8px;
        font-size: 12px;
        font-weight: 700;
        color: #499fb6;

        .Content__Floor {
            display: block;
            width: 100%;
            border-radius: 4px;
            margin-bottom: 16px;
        }

        .Content__Title {
            font-size: 12px;
            font-weight: 700;
            color: #499fb6;
        }

        .Content__Img {
            margin: 8px;
            display: inline-block;
            width: 158px;
            height: 158px;
            border-radius: 4px;
        }

        .Content__TextArea {
            margin-top: 8px;
            width: 100%;
            height: 120px;
            padding: 16px;
            border-radius: 4px;
            box-sizing: border-box;
            background: #eee;

            color: #4b4b4b;
            font-size: 14px;
            font-weight: 400;

            overflow-y: auto;
            overflow-x: hidden;
        }

        .Content__Desc {
            padding: 8px;
            font-size: 14px;
            font-weight: 400;
            color: #4b4b4b;
        }

        .Content__Cost {
            padding: 8px;
            font-size: 20px;
            color: #2b2b2b;
        }
    }
`;

const SummaryDivision = styled.div`
    width: 100%;
    height: 1px;
    background: #bbb;
    margin: 16px auto;
`;

const BtnBottom = styled.div`
    display: inline-block;
    margin-right: 16px;
    width: 240px;
    height: 48px;
    border: 1px solid ${props => (props.btnBack ? "#dbdbdb" : "transparent")};
    background: ${props => (props.btnBack ? "transparent" : "#6db2c5")};

    box-sizing: border-box;

    font-size: 14px;
    font-weight: 700;
    line-height: 48px;
    color: ${props => (props.btnBack ? "#4b4b4b" : "#fff")};

    transition: all 0.32s ease;
    cursor: pointer;

    &:nth-child(2) {
        margin-right: 0;
    }

    &:hover {
        background: ${props => (props.btnBack ? "#f2f2f2" : "#499fb6")};
    }
    &:active {
        background: ${props => (props.btnBack ? "#eee" : "#499fb6")};
    }
`;

export { SummaryStyle, SummaryContent, SummaryDivision, BtnBottom };
