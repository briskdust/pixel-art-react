import { useState } from "react";

const SizePicker = props => {
    let [height, alterHeight] = useState(1);
    let [width, alterWidth] = useState(1);

    let getHeight = event => {
        alterHeight(parseInt(event.target.value));
    };

    let getWidth = event => {
        alterWidth(parseInt(event.target.value));
    };

    let getNum = event => {
        event.preventDefault();
        props.onSize(height, width);
    };

    return (
        <form>
            <label htmlFor="inputHeight">Grid Height:</label>
            <input
                type="number"
                id="inputHeight"
                name="height"
                value={height}
                onChange={getHeight}
                style={{ width: "6em", margin: "3px 5px" }}
            />
            <label htmlFor="inputWidth">Grid Width:</label>
            <input
                type="number"
                id="inputWidth"
                name="width"
                value={width}
                onChange={getWidth}
                style={{ width: "6em", margin: "3px 5px" }}
            />
            <input type="submit" onClick={getNum} />
        </form>
    );
};

export default SizePicker;
