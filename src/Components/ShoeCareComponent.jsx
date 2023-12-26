import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Context } from "../Context/useContext";
import ItemComponent from "./ItemComponent";
import "/public/shoecare.css";

function ShoeCareComponent() {
    const { data } = useContext(Context);
    const shoecareProduct = data.filter((a) => a.id === 5);
    console.log(shoecareProduct);
    return (
        <>
            <Container fluid>
                <div className="show-care">
                    <div className="hearder-showcare">
                        <h3>PHƯƠNG PHÁP CHĂM SÓC GIÀY, DA CHUYÊN DỤNG</h3>
                        <div className="image-header-showcare">
                            <img
                                src="https://w.ladicdn.com/s1750x900/6258e086da168c0013857d3e/b1-herobanner-desktop-20230620075816-i8ivv.jpg"
                                alt=""
                            />
                        </div>
                        <div className="content-hearder-showcare">
                            <p>
                                Các loại da cao cấp của ECCO cần được chăm sóc đúng cách theo từng bước, để có thể giữ nguyên kết cấu, độ mềm mịn của
                                con da. Từ đó giúp sản phẩm sử dụng được bền lâu hơn theo thời gian.
                            </p>
                        </div>
                        <div className="icon-header-showcare">
                            <div className="icon-showcare">
                                <img src="https://w.ladicdn.com/s650x650/6258e086da168c0013857d3e/b23-imagegrid-20230620072456-zkne4.png" alt="" />
                                <h3>1. Làm Sạch</h3>
                            </div>
                            <div className="icon-showcare">
                                <img src="https://w.ladicdn.com/s650x650/6258e086da168c0013857d3e/b22-imagegrid-20230620072456-bda-c.png" alt="" />
                                <h3>2. Chăm sóc</h3>
                            </div>
                            <div className="icon-showcare">
                                <img src="https://w.ladicdn.com/s650x650/6258e086da168c0013857d3e/b21-imagegrid-20230620072456-nc76x.png" alt="" />
                                <h3>3. Bảo vệ</h3>
                            </div>
                        </div>
                        <h3>HƯỚNG DẪN THỰC HIỆN TỪNG BƯỚC</h3>
                    </div>
                    <div className="content-body-showcard">
                        <h3>Video hướng dẫn vệ sinh giày</h3>
                        <div className="video-showcare">
                            <video controls={false} muted loop playsInline autoPlay>
                                <source src="public/images/showcare.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="product-showcare">
                        <h3 className="m-5">Một số sản phẩm chăm sóc phổ biến</h3>
                        <Row className="shoecare-item d-flex" lg={4} md={2} sm={2}>
                            {shoecareProduct.map((i) =>
                                i.products.map((value, key) => (
                                    <ItemComponent value={value} key={key}/>
                                ))
                            )}

                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default ShoeCareComponent;
