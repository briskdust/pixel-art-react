import "./Canvas.css";

const CanvasRow = props => {
    let pColor = props.color;
    let arr = Array.apply(null, Array(props.width));

    let colorHandler = event => {
        event.target.style.background = pColor;
    };

    return (
        <tr>
            {arr.map(() => (
                <td onClick={colorHandler}></td>
            ))}
        </tr>
    );
};

export default CanvasRow;
