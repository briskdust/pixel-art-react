import { useState } from "react";

import ColorPicker from "./color_picker/ColorPicker";
import PixelCanvas from "./pixel_table/PixelCanvas";
import SizePicker from "./size_picker/SizePicker";

import "./App.css";

const App = () => {
    let [pInfo, alterInfo] = useState({
        height: 0,
        width: 0,
        color: "black",
    });

    let sizeHandler = (height, width) => {
        alterInfo(prevState => {
            return {
                ...prevState,
                height: height,
                width: width,
            };
        });
    };

    let colorHandler = color => {
        alterInfo(prevState => {
            return {
                ...prevState,
                color: color,
            };
        });
    };
    return (
        <div>
            <h1>Pixel Art Maker</h1>

            <h2>Choose Grid Size</h2>

            <SizePicker onSize={sizeHandler} />

            <h2>Pick A Color</h2>
            <ColorPicker onColor={colorHandler} />

            <h2>Design Canvas</h2>

            <PixelCanvas pixelInfo={pInfo} />
        </div>
    );
};

export default App;
