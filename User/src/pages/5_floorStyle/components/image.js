import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageStyle = styled.img`
    width: 168px;
    height: 150px;
    objectfit: cover;
    box-sizing: border-box;
    cursor: pointer;
    border: ${props => (props.isSelected ? "8px solid #499fb6" : "none")};
    opacity: ${props => (props.isSelected ? "80%" : "100%")};
`;

export default class Image extends Component {
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
