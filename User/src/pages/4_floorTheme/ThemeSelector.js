import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Map } from "immutable";

/* *-------------------------------------------------------------------* 
                    | 인테리어 이미지 선택 Component |
*-------------------------------------------------------------------* */

/* *-------------------------------------------------------------------* 
1. 인테리어 이미지 추가를 원할 시엔 :  폴더 public/assets/floortheme 에 담아주면 됨. 
2. 이미지는 {0: 'url', 1: 'url'...}으로 담겨온다. 
3. 이미지 크기는 320*480 혹은 480*320
*-------------------------------------------------------------------* */

function importAll(r) {
    let images = {};
    r.keys().map((item,index) => images[index] = r(item))  
    return images;
}

const imported = importAll(require.context('../../../public/assets/floortheme', false, /\.(png|jpe?g|svg)$/));
const imageList = Object.values(imported)


/* *-------------------------------------------------------------------* 
                    각각 인테리어 이미지 하나 크기, styling
*-------------------------------------------------------------------* */
const ImageStyle = styled.img`
    width: 168px;
    height: 150px;
    objectfit: cover;
    box-sizing: border-box;
    cursor: pointer;
    border: ${props => (props.isSelected ? "8px solid #499fb6" : "none")};
    opacity: ${props => (props.isSelected ? "80%" : "100%")};
`;

class Image extends Component {
    render() {
        const { src, isSelected, onImageClick } = this.props;

        return (
            <div
                className={`responsive${isSelected ? " selected" : ""}`}
                onClick={onImageClick}
            >
                <ImageStyle
                    src={src}
                    isSelected={isSelected ? true : false}
                    className={`thumbnail${isSelected ? " selected" : ""}`}
                    alt="select-images"
                />
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string,
    isSelected: PropTypes.bool
};


/* *-------------------------------------------------------------------* 
            이미지들을 감싸고 있는 wrapper, 이미지 선택 관련 component
            클릭 했을 때의 event, 등등을 관리 
*-------------------------------------------------------------------* */

const RenderImageWrap = styled.div`
    width: 100%;
    height: 320px;
    overflow: auto;
    border: 1px solid #eee;
    padding: 2px;
    box-sizing: border-box;
`;

const RenderImage = styled.div`
    float: left;
    margin: 8px;
`;

class ImagePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picked: Map()
        };
        this.handleImageClick = this.handleImageClick.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    handleImageClick(image) {
        const { multiple, onPick } = this.props;
        const pickedImage = multiple ? this.state.picked : Map();
        const pickedImageToArray = [];

        const newerPickedImage = pickedImage.has(image.value)
            ? pickedImage.delete(image.value)
            : pickedImage.set(image.value, image.src);

        if (newerPickedImage.size <= 3) {
            this.setState({ picked: newerPickedImage });
            newerPickedImage.map((image, i) =>
                pickedImageToArray.push({ src: image, value: i })
            );
            onPick(multiple ? pickedImageToArray : pickedImageToArray[0]);
        } else {
            alert("Sorry, You chose more than 3 images!");
        }
    }

    renderImage(image, i) {
        return (
            <RenderImage>
                <Image
                    src={image.src}
                    isSelected={this.state.picked.has(image.value)}
                    onImageClick={() => this.handleImageClick(image)}
                    key={i}
                />
            </RenderImage>
        );
    }

    render() {
        const { images } = this.props;
        return (
            <RenderImageWrap>
                <PerfectScrollbar>
                    {images.map(this.renderImage)}
                </PerfectScrollbar>
            </RenderImageWrap>
        );
    }
}

ImagePicker.propTypes = {
    images: PropTypes.array,
    multiple: PropTypes.bool,
    onPick: PropTypes.func
};




/* *-------------------------------------------------------------------* 
            4_floorTheme 으로 Export 하는 큰 Component 
*-------------------------------------------------------------------* */

class ThemeSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }

    onPickImages(images) {
        this.setState({ images }, () => {
            this.props.pickedThemes(this.state.images);
            console.log(images);
        });
    }

    render() {
        return (
            <ImagePicker
                images={imageList.map((image, i) => ({
                    src: image,
                    value: i
                }))}
                onPick={this.onPickImages.bind(this)}
                multiple
            />
        );
    }
}

export default ThemeSelector;
