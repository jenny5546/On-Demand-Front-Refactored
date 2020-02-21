import styled from "styled-components";

const OndemandStyle = styled.section`
    position: fixed;
    top: 80px;
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
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
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
                margin-bottom: 80px;
            }

            .Left__Btn {
                width: 100%;
                height: 48px;
                background: #40474e;
                text-align: center;

                transition: all 0.32s ease;
                cursor: pointer;

                &:hover {
                    background: #6db2c5;
                }
                &:active {
                    background: #499fb6;
                }

                span {
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 48px;
                    color: #fff;
                }
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

export default OndemandStyle;
