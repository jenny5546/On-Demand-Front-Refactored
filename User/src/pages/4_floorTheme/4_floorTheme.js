import React, { useContext, useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector";
import { useDropzone } from "react-dropzone";
import { FloorThemeStyle, BtnBottom } from "./style";
import { OndemandContext, OndemandConsumer } from "../../context/OndemandContext";
import { Link } from 'react-router-dom';
import styled from "styled-components";

/* *-----------------------------------------------------------------* 
                        직접 업로드 모달 창 관리 
*-----------------------------------------------------------------* */
const getColor = props => {
    if (props.isDragAccept) {
        return "#00e676";
    }
    if (props.isDragReject) {
        return "#ff1744";
    }
    if (props.isDragActive) {
        return "#2196f3";
    }
    return "#eeeeee";
};

const Popup = styled.div`
    width: 100%;
    height: 320px;
    border: 1px solid #eee;
    padding: 2px;
    box-sizing: border-box;
    border-style: dashed;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    background: #fafafa;

    &:hover {
        background: #eee;
    }

    p {
        position: absolute;
        top: 45%;
        left: 84%;
        font-size: 12px;
        transform: translate(-50%, -50%);
        width: 100%;
        color: #4b4b4b;
    }
`

const UploadBtn = styled.button`
    border:0;
    padding: 10px;
    border-radius: 10px;
    background: #499fb6;
    color: white;
    font-weight: 600;
    
    &:hover {
        background: #6db2c5;
    }
    
`

const ReturnBtn = styled.button`
    border: 1px solid #d9e7e9;
    padding: 10px;
    border-radius: 10px;
    &:hover {
        background: #e7f2f4;
    }
`

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    maxHeight: 300,
    overflow: 'auto',
};
  
const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};
  
const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};
  
const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const FloorTheme = props => {

    const contextType = useContext(OndemandContext);
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img
              src={file.preview}
              style={img}
              alt= "preview"
            />
          </div>
        </div>
    ));
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const pickedThemes = value => {
        let srclist = [];
        for (var i = 0; i < value.length; i++) {
            srclist.push(value[i].src);
        }
        contextType.handleSelectedTheme(srclist);
        // console.log(srclist);
    };

    const handleNextStep = e => {
        e.preventDefault();
        props.nextStep();
    };

    const handleBtnBack = e => {
        e.preventDefault();
        props.prevStep();
    };
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({ 
        accept: "image/*", 
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
        }
    });

    return (
        <OndemandConsumer>
            {value => (
                <FloorThemeStyle>
                    <Link to= "/">

                        <div
                            className="FloorTheme__BtnClose"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                            </svg>
                        </div>

                    </Link>

                    <main className="FloorThemeWrap">
                        <div className="FloorTheme__Title">
                            Pick Floor Styles of your Choice
                        </div>
                        <div className="FloorTheme__SubTitle">
                            Select a <span>maximum of three</span> items
                        </div>
                        <div className="FloorTheme__UnderBar" />
                        { open ? 
                        <Popup
                            {...getRootProps({
                                isDragActive,
                                isDragAccept,
                                isDragReject
                            })}>
                                <input 
                                    {...getInputProps({onChange: value.handleUploadedTheme})}   
                                />
                                <p>
                                    Drag and Drop your Interior Styles
                                </p>
                                <div style={thumbsContainer}>
                                    {thumbs}
                                </div>
                                
                        </Popup> :
                        <ThemeSelector pickedThemes={pickedThemes} />}
                        
                        <div className="FloorTheme__SubTitle">

                            {open? 
                                <ReturnBtn onClick = {()=> setOpen(false)}>
                                    Return to <span>Interior Choices</span>
                                </ReturnBtn>
                                :
                                <UploadBtn onClick = {()=> setOpen(!open)}>
                                    <p1>Or</p1> Upload your Own Style
                                </UploadBtn> 
                            }
                            
                        </div>

                        {/* <div className="floortheme__body-imageuploader-wrap">
                            <div>
                                {value.val.floorUploadedTheme.length > 0 ? (
                                    <img
                                        src={
                                            value.val.floorUploadedThemeUrl
                                        }
                                        style={{
                                            maxWidth: "100px",
                                            maxHeight: "50px"
                                        }}
                                        alt = "floorplan"
                                    ></img>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <input
                                type="file"
                                name="floorTheme"
                                onChange={value.handleUploadedTheme}
                                className="floortheme__body-imageuploader-wrap--input"
                                multiple
                            />
                        </div> */}

                        <section className="FloorTheme__Bottom">
                            <BtnBottom btnBack onClick={handleBtnBack}>
                                Back
                            </BtnBottom>

                            <BtnBottom onClick={handleNextStep}>
                                Next
                            </BtnBottom>
                        </section>
                    </main>
                </FloorThemeStyle>
            )}
        </OndemandConsumer>
    );
    
}

export default FloorTheme;
