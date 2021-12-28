const ColorPicker = props => {
    let getColor = event => {
        props.onColor(event.target.value);
    };

    return <input type="color" id="colorPicker" onBlur={getColor} />;
};

export default ColorPicker;
