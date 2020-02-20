import React, { Component } from "react";

import ImagePicker from "./image-picker";

import img1 from "../../../static/img/floor_themes/residential/ex1.jpg";
import img2 from "../../../static/img/floor_themes/residential/ex2.jpg";
import img3 from "../../../static/img/floor_themes/residential/ex3.jpg";
import img4 from "../../../static/img/floor_themes/residential/ex4.jpg";
import img5 from "../../../static/img/floor_themes/residential/ex5.jpg";
import img6 from "../../../static/img/floor_themes/residential/ex6.jpg";
import img7 from "../../../static/img/floor_themes/residential/ex7.jpg";
import img8 from "../../../static/img/floor_themes/residential/ex8.jpg";
import img9 from "../../../static/img/floor_themes/residential/ex9.jpg";
import img10 from "../../../static/img/floor_themes/residential/ex10.jpg";
import img11 from "../../../static/img/floor_themes/residential/ex11.jpg";
import img12 from "../../../static/img/floor_themes/residential/ex12.jpg";
import img13 from "../../../static/img/floor_themes/residential/ex13.jpg";
import img14 from "../../../static/img/floor_themes/residential/ex14.jpg";
import img15 from "../../../static/img/floor_themes/residential/ex15.jpg";
import img16 from "../../../static/img/floor_themes/residential/ex16.jpg";
import img17 from "../../../static/img/floor_themes/residential/ex17.jpg";
import img18 from "../../../static/img/floor_themes/residential/ex18.jpg";
import img19 from "../../../static/img/floor_themes/residential/ex19.jpg";
import img20 from "../../../static/img/floor_themes/residential/ex20.jpg";

const imageList = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20
];

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
