import { PropTypes } from "prop-types";
import Carousel from "react-bootstrap/Carousel";
SliderComponent.propTypes = {
    dataProducts: PropTypes.object,
};
function SliderComponent({ dataProducts }) {
    const slider = dataProducts.sliderData;

    return (
        <Carousel data-bs-theme="dark" className="" indicators={false}>
            {slider.map((value, key) => (
                <Carousel.Item key={key}>
                    <img className="d-block w-100" src={value.img} alt="First slide" />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SliderComponent;
