import React, { Component } from "react";

import ImagePicker from "./image-picker";


//IMPORTING THEME IMAGES
// {0: 'url1', 1:'url2' ...} 이런식으로 담겨온다. 
function importAll(r) {
    let images = {};
    r.keys().map((item,index) => images[index] = r(item))  
    return images;
}

const imported = importAll(require.context('../../../static/img/floor_themes/residential', false, /\.(png|jpe?g|svg)$/));
const imageList = Object.values(imported)

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
