import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import check from '../../../static/img/application/check.png'

export default class Image extends Component {
  
  render() {
    const { src, isSelected, onImageClick } = this.props
    const ImageStyle = (width, height) => {
      return {
        width,
        height,
        objectFit: "cover",
        borderRight: `${isSelected ? '3px solid #499fb6': '1px solid white'}`,
        borderLeft: `${isSelected ? '3px solid #499fb6': '1px solid white'}`,
        opacity: `${isSelected ? '50%': '100%'}`,
        cursor: "pointer"
      }
    }
    
    return (
      <div className={`responsive${isSelected ? " selected" : ""}`}
        onClick={onImageClick}>
        <img 
            src={src}
            className={`thumbnail${isSelected ? " selected" : ""}`}
            style={ImageStyle(180, 150)}
            alt = "select-images"
        />
        {/* <img src={check} alt="checkIcon" style={{ width: 75, height: 75, objectFit: "cover" }}/> */}
        <div className="checked">
          {/* <img src={imgCheck} alt="checkIcon" style={{ width: 75, height: 75, objectFit: "cover" }}/> */}
          <div className="icon"/>
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}