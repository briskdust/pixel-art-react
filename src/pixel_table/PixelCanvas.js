import CanvasRow from "./CanvasRow";
import "./Canvas.css";

const PixelCanvas = props => {
    let arr = Array.apply(null, Array(props.pixelInfo.height));

    return (
        <table>
            {arr.map(() => (
                <CanvasRow
                    width={props.pixelInfo.width}
                    color={props.pixelInfo.color}
                />
            ))}
        </table>
    );
};

export default PixelCanvas;
