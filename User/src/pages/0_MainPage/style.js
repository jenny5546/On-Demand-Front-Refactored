import styled from "styled-components";

const OndemandStyle = styled.section`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: #fff;

    .Ondemand__Left {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;

        .Left_Wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -45%);
            font-family: "Noto Sans KR", sans-serif;
            text-align: center;

            width: 480px;
            padding: 24px;
            box-sizing: border-box;

            user-select: none;

            .Left__Logo {
                display: inline-block;
                margin-bottom: 8px;
            }

            .Left__Line {
                width: 100%;
                height: 1px;
                background: #bbb;
                margin-bottom: 24px;
            }

            .Left__Title {
                display: inline-block;
                margin: 0 8px;
                font-size: 24px;
                font-weight: 700;
                color: #2b2b2b;
                margin-bottom: 40px;
                text-align: left;
            }

            .Left__Desc {
                display: inline-block;
                margin: 0 8px;
                font-size: 16px;
                color: #4b4b4b;
                text-align: left;
                margin-bottom: 64px;
            }
        }
    }

    .Ondemand__Right {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: #eee;
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    }
`;

const OndemandStartBtn = styled.section`
    width: 100%;
    height: 48px;
    background: ${props => (props.active ? "#40474e" : "#fff")};
    border: 2px solid ${props => (props.active ? "transparent" : "#40474e")};
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 16px;

    transition: all 0.32s ease;
    cursor: pointer;

    &:hover {
        background: ${props => (props.active ? "#6db2c5" : "#eee")};
    }
    &:active {
        background: ${props => (props.active ? "#499fb6" : "#e4e4e4")};
    }

    span {
        font-size: 16px;
        font-weight: 700;
        line-height: 44px;
        color: ${props => (props.active ? "#fff" : "#40474e")};
    }
`;

const OndemandIframe = styled.section`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #eee;
    transition: all 0.32s ease;
    cursor: pointer;

    &:hover,
    &:active {
        background: #d9e7e9;
    }

    .iframe_Contetns_Wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 1;
        transition: all 0.32s ease;
        user-select: none;

        .iframe__logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 240px;
            z-index: 2;
        }
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
        }
        span {
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 240px;

            font-size: 16px;
            font-weight: 700;
            color: #4b4b4b;
        }
    }
`;

export { OndemandStyle, OndemandIframe, OndemandStartBtn };
