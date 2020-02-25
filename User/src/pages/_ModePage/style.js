import styled from "styled-components";

const FloorTypeStyle = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .FloorType__BtnClose {
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

    .FloorTypeWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        user-select: none;

        .FloorType__Title {
            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            margin-bottom: 16px;
            text-align: center;
        }

        .FloorType__Subtitle {
            font-size: 16px;
            color: #4b4b4b;
            margin-bottom: 64px;
            text-align: center;
        }
    }

    .FloorType__CardWrap {
        min-width: 560px;
    }

    .FloorType__BackLink {
        text-decoration: none;
    }

    .FloorType__BtnBack {
        margin: auto;
        margin-top: 32px;
        text-align: center;

        width: 320px;
        height: 48px;
        border: 1px solid #d9e7e9;

        font-size: 14px;
        font-weight: 700;
        line-height: 48px;
        color: #499fb6;

        transition: all 0.32s ease;
        cursor: pointer;

        &:hover {
            background: #e7f2f4;
        }
        &:active {
            background: #d9e7e9;
        }
    }
`;

const FloorTypeCard = styled.div`
    display: inline-block;
    width: 272px;
    height: 356px;
    border-radius: 4px;
    background: #fbfbfb;
    margin-right: 16px;

    transition: all 0.32s ease;
    cursor: pointer;

    &:nth-child(2) {
        margin-right: 0;
    }

    &:hover {
        background: #e7f2f4;
    }
    &:active {
        background: #d9e7e9;
    }

    .FloorType__Img {
        margin: 16px;
        width: 240px;
        height: 200px;
        background: #b4b4b4;
    }

    .FloorType__Name {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #2b2b2b;
        text-align: center;
    }

    .FloorType__Desc {
        width: 240px;
        margin: auto;
        margin-top: 8px;
        font-size: 14px;
        color: #4b4b4b;
        text-align: center;
    }
`;

export { FloorTypeStyle, FloorTypeCard };
