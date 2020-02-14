import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import Image from './image'

class ImagePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picked: Map()
    }
    this.handleImageClick = this.handleImageClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
  }

  handleImageClick(image) {

    const { multiple, onPick } = this.props
    const pickedImage = multiple ? this.state.picked : Map()
    const pickedImageToArray = []

    
    const newerPickedImage = 
    pickedImage.has(image.value)  ? 
      pickedImage.delete(image.value) : 
        pickedImage.set(image.value, image.src)
  
    if (newerPickedImage.size <=3){
      this.setState({picked: newerPickedImage})
      newerPickedImage.map((image, i) => pickedImageToArray.push({src: image, value: i})) 
      onPick(multiple ? pickedImageToArray : pickedImageToArray[0])
    }
    else {
      alert("Sorry, You chose more than 3 images!")
    }
    
    
  }

  renderImage(image, i) {
    return (
      <div style={{float:"left"}}>
        <Image 
        src={image.src}
        isSelected={this.state.picked.has(image.value)} 
        onImageClick={() => this.handleImageClick(image)} 
        key={i}
      />
      </div>
      
    )
  }

  render() {
    const { images } = this.props
    return (
      <div className="image_picker" style={{maxWidth: "740px",  maxHeight: "200px" ,overflow: "auto"}} >
        { images.map(this.renderImage) }
        <div className="clear"/>
      </div>
    )
  }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func
}

export default ImagePicker