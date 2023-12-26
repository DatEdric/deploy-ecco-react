import React from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ItemComponent from "./ItemComponent";

const MutilpleCarouselComponent = ({ value }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Số hình ảnh hiển thị trên mỗi slide
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <>
                <Row>
                    <ItemComponent value={value} />
                </Row>
            </>
        </Slider>
    );
};

export default MutilpleCarouselComponent;
