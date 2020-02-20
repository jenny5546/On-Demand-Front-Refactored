import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { Map } from "immutable";

import styled from "styled-components";
import Image from "./image";

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

export default ImagePicker;
