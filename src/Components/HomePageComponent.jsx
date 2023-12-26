import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../Context/useContext";
import { dataProducts } from "../data";
import SliderComponent from "./SilderCompopnent";
import "/public/homepage.css";

export default function HomePageComponent() {
    const { data } = useContext(Context);
    const femaleProduct = data.filter((i) => i.id === 1);
    const nuproduct = femaleProduct.map((a) => a.products.slice(0, 2));
    const maleProduct = data.filter((i) => i.id === 2);
    const namproduct = maleProduct.map((a) => a.products.slice(0, 2));
    const golfProduct = data.filter((i) => i.id === 3);
    const golf = golfProduct.map((a) => a.products.slice(0, 4));
    const leatherProduct = data.filter((i) => i.id === 4);
    const leather = leatherProduct.map((a) => a.products.slice(0, 4));
    const detailProduct = () => {
    }
    return (
        <>
            <div className="w-100 mx-0">
                <SliderComponent dataProducts={dataProducts} />
            </div>

            <h2 className="text-center m-4">NEW ARRIVALS</h2>
            <Row className="new_products mb-5" lg={4} md={2} sm={1}>
                {nuproduct.map((item) =>
                    item.map((value, key) => (
                        <Col>
                            <Card className="item border-0" key={key}>
                                <Card.Img variant="top" src={value.img1} />
                                <Card.Body>
                                    <Card.Title className="title_card">{value.name}</Card.Title>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    ))
                )}

                {namproduct.map((item) =>
                    item.map((value, key) => (
                        <Col>
                            <Card className="item border-0" key={key} onClick={detailProduct}>
                                <Card.Img variant="top" src={value.img1} />
                                <Card.Body>
                                    <Card.Title className="title_card">{value.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
            <Row className="products_gender d-flex" lg={2} md={2} sm={1}>
                <Col>
                    <div className="men">
                        <img src="public/images/banner_1.jpg" alt="" />
                        <h3>ECCO Street 720</h3>
                        <Link to="/man">
                            <Button className=" btn-dark">XEM NGAY</Button>
                        </Link>
                    </div>
                </Col>
                <Col>
                    <div className="woman">
                        <img src="public/images/banner_2.jpg" alt="" />
                        <h3>ECCO Soft 7</h3>
                        <Link to="/woman">
                            <Button className=" btn-dark">XEM NGAY</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <div className="leather_show">
                <h2 className="text-center my-5">LEATHER GOODS</h2>
                <Row className="products_leather d-flex" lg={4} md={2} sm={1}>
                    {leather.map((item) =>
                        item.map((value, key) => (
                            <Col>
                                <Card className="item border-0" key={key}>
                                    <Card.Img variant="top" src={value.img1} />
                                    <Card.Body>
                                        <Card.Title className="title_card">{value.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </div>
            <h2 className="text-center my-5">GOLF</h2>
            <Row className="golf_intro d-flex" lg={3} md={1} sm={1}>
                <Col className="mb-3">
                    <Card className="img_hover border-0">
                        <Card.Img variant="top" className="img-banner-golf" src="public/images/banner_golf1.webp" />
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card className="img_hover border-0">
                        <Card.Img variant="top" className="img-banner-golf" src="public/images/banner_golf.webp" />
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card className="img_hover border-0">
                        <Card.Img variant="top" className="img-banner-golf" src="public/images/banner_golf2.webp" />
                    </Card>
                </Col>
            </Row>
            <Row className="golf_products d-flex" lg={4} md={2} sm={1}>
                {golf.map((item) =>
                    item.map((value, key) => (
                        <Col>
                            <Card className="item border-0" key={key}>
                                <Card.Img variant="top" src={value.img1} />
                                <Card.Body>
                                    <Card.Title className="title_card">{value.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
                {/* <Col>
                    <Card className="item border-0">
                        <Card.Img variant="top" src="public/images/eco-golf1.jpg" />
                        <Card.Body>
                            <Card.Title className="leather_title_card">ECCO M GOLF BIOM G5</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="item border-0">
                        <Card.Img variant="top" src="public/images/eco-golf2.jpg" />
                        <Card.Body>
                            <Card.Title className="leather_title_card">ECCO M GOLF BIOM G5</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="item border-0">
                        <Card.Img variant="top" src="public/images/eco-golf3.jpg" />
                        <Card.Body>
                            <Card.Title className="leather_title_card">ECCO M GOLF BIOM G5</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="item border-0">
                        <Card.Img variant="top" src="public/images/eco-golf4.jpg" />
                        <Card.Body>
                            <Card.Title className="leather_title_card">ECCO M GOLF BIOM G5</Card.Title>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
            <div className="expand_products">
                <h4 className="text-center">CÓ THỂ BẠN QUAN TÂM</h4>
                <div className="feeback-list">
                    <img src="public/images/60th.jpg" alt="" />
                    <div className="overlay">
                        <a href="https://www.instagram.com/ecco/">
                            <BsInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
