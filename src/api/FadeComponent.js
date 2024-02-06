import {Fade} from "@mui/material";
import "../styles/Hero.css"

const FadeComponent = ({imgSrc, isActive}) => {
    return (
        <Fade in={isActive} timeout={{enter: 5000, exit: 5000}}>
            <img src={imgSrc} alt="Image" className="slider-image"/>
        </Fade>
    )
}

export default FadeComponent;