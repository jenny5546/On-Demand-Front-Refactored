import styled from "styled-components";

const TutorialStyle = styled.main`
    .TutorialBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.8);
        z-index: 30;

        animation-name: fadeIn;
        animation-duration: 0.5s;
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }

    .TutorialWrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 480px;
        height: 550px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0px 4px 16px rgba(22, 65, 76, 0.16);

        font-family: "Noto Sans KR", sans-serif;
        text-align: center;
        user-select: none;

        .Tuto__Subtitle {
            margin-top: 32px;
            display: block;
            font-size: 14px;
            color: #4b4b4b;
        }
        .Tuto__Title {
            margin-top: 8px;
            display: block;
            font-size: 20px;
            font-weight: 700;
            color: #2b2b2b;
        }

        .BtnClose {
            position: absolute;
            right: 0;
            margin: 16px;
        }

        .Tuto__SkipBtn {
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: translate(50%, 0);
            margin-bottom: 32px;

            width: 320px;
            height: 48px;
            background: #6db2c5;

            font-size: 14px;
            text-transform: uppercase;
            text-align: center;
            font-weight: 700;
            line-height: 48px;
            color: #fff;

            transition: all 0.32s ease;
            cursor: pointer;
            &:hover,
            &:active {
                background: #499fb6;
            }

            &.Tuto {
                background: #f0f6f7;
                color: #499fb6;
                &:hover {
                    background: #e7f2f4;
                }
                &:active {
                    background: #d9e7e9;
                }
            }
        }
    }
`;

const TutoContent = styled.section`
    margin-top: 40px;

    .TutoContent__Img {
        width: 240px;
        height: 240px;
        margin: auto;
    }

    .BtnPrev {
        position: absolute;
        top: 44%;
        left: 40px;
        transform: translate(0, -50%);
    }

    .BtnNext {
        position: absolute;
        top: 44%;
        right: 40px;
        transform: translate(0, -50%);
    }

    .TutoContent__desc {
        display: block;
        margin-top: 32px;
        font-size: 16px;
        color: #4b4b4b;
    }
`;

const TutoBtn = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: ${props => (props.dark ? "#383e44" : "#fbfbfb")};

    padding: 8px;
    box-sizing: border-box;
    transition: all 0.32s ease;
    user-select: none;
    cursor: pointer;

    &:hover {
        background: ${props => (props.dark ? "#40474e" : "#ebebeb")};
    }
    &:acitve {
        background: ${props => (props.dark ? "#2d3236" : "#dbdbdb")};
    }
    svg {
        fill: ${props => (props.dark ? "#eee" : "#383e44")};
    }
`;

export { TutorialStyle, TutoContent, TutoBtn };
