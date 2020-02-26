import styled from "styled-components";

const ModeTypeStyle = styled.main`

    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1;

    .ModeTypeWrap {

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        user-select: none;
        

        .ModeType__Title {

            font-size: 24px;
            font-weight: 700;
            color: #2b2b2b;
            margin-bottom: 16px;
            text-align: center;
        }

        .ModeType__Subtitle {
            font-size: 16px;
            color: #4b4b4b;
            margin-bottom: 64px;
            text-align: center;
        }
    }

    .ModeType__CardWrap {
        min-width: 560px;
        display: flex;
    }

    
    
`;

const ModeTypeCard = styled.div`

    display: inline-block;
    width: 272px;
    height: 356px;
    border-radius: 4px;
    background: #fbfbfb;
    margin-right: 16px;

    transition: all 0.32s ease;
    cursor: pointer;


    &:hover {
        background: #e7f2f4;
    }
    &:active {
        background: #d9e7e9;
    }

    .ModeType__Img {
        margin: 16px;
        width: 240px;
        height: 200px;
        background: #b4b4b4;
    }

    .ModeType__Name {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #2b2b2b;
        text-align: center;
    }

    .ModeType__Desc {
        width: 240px;
        
        margin: auto;
        margin-top: 8px;
        font-size: 12px;
        color: #4b4b4b;
        text-align: center;
    }
`;

export { ModeTypeStyle, ModeTypeCard };
