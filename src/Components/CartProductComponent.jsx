import { useContext } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../Context/useContext";
import formatCurrency from "../fomartCurrent";
import "/public/cart.css";
export default function CartProductComponent() {
    const { showCart, setShowCart, history,cartSubTotal, } = useContext(Context);
    
    const handleClose = () => setShowCart(false);
    const currentAcc = JSON.parse(localStorage.getItem("currentAccount"));



    return (
        <>
            <Modal show={showCart} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="title-cart">Giỏ hàng của bạn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {currentAcc?.products?.map((value, key) => (
                            <div className="pay-item d-inline-flex" key={key}>
                                <img style={{ width: "80px", height: "80px" }} src={value.product.img1} alt="" />
                                <div className="descript-item">
                                    <p className="title-cart-item">{value.product.name}</p>
                                    <p className="price-cart-item">{formatCurrency(value.product.price - value.product.price * (value.product.salecost / 100))}</p>
                                </div>
                            </div>
                        ))}
                    </Row>
                    <div className="total d-inline-flex">
                        <span>Tổng Tiền</span>
                        <p>
                            <span>{formatCurrency(cartSubTotal)}</span>
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="cart-btn d-flex flex-column">
                        <Link to={"/deploy-ecco-react/cart"} className="nav-link">
                            <Button className="btn-modal-cart" variant="secondary" onClick={handleClose}>
                                Xem Giỏ Hàng
                            </Button>
                        </Link>
                        <Button className="btn-modal-cart1" variant="secondary" onClick={handleClose}>
                            Tiếp Tục Mua Sắm
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
