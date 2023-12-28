import { useContext, useState } from "react";
import { Button, Card, Carousel, Collapse, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../Context/useContext";
import formatCurrency from "../fomartCurrent";
import ItemComponent from "./ItemComponent";
import "/public/detail.css";
export default function ProductDetailComponent() {
    const { flat, history, sethistory, data, user, setUser, productAccount, setProductAccount, account, setAccount } = useContext(Context);
    const { state } = useLocation();
    const [activeButton, setActiveButton] = useState(null);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState(0);

    const currentAccount = JSON.parse(localStorage.getItem("currentAccount")) ||{};

    const getValueSize = (e) => {
        setSize(e.target.value);
    };
    const handleActiveBtn = (id) => {
        setActiveButton(id);
    };
    const cleanProduct = data.filter((i) => i.id === 5);
    const filterClean = cleanProduct.map((i) => i.products.slice(0, 4));

    const btn37 = `btn-size ${activeButton === 37 ? "active" : ""}`;
    const btn38 = `btn-size ${activeButton === 38 ? "active" : ""}`;
    const btn39 = `btn-size ${activeButton === 39 ? "active" : ""}`;
    const btn40 = `btn-size ${activeButton === 40 ? "active" : ""}`;
    const btn41 = `btn-size ${activeButton === 41 ? "active" : ""}`;
    const btn42 = `btn-size ${activeButton === 42 ? "active" : ""}`;
    const cart = JSON.parse(localStorage.getItem("history_cart"));
    console.log(cart);

    const addToCart = () => {
        if (Object.keys(currentAccount).length === 0) {
            toast.error("Hãy đăng nhập để có thể thêm sản phẩm vào giỏ hàng của bạn", {
                position: toast.POSITION.TOP_CENTER,
            });
            return
        } 
        state.product["size"] = size;
        const availProduct = currentAccount?.map(i => i.products?.filter((item) => 
            item.product.name === state.product?.name && item.product?.size === state.product?.size
        ));
        console.log(availProduct,"avai");
        if (state.product.size == 0) {
            toast.error("bạn chưa chọn kích thước của sản phẩm", {
                position: toast.POSITION.TOP_CENTER,
            });
        } else {
            // co roi
            if (availProduct.length !==0) {
                availProduct[0].product.quantity += 1;
                currentAccount.products[availProduct[0].index] = availProduct[0].item
                console.log(availProduct[0].product,"availProduct")
                toast.info("Thêm sản phẩm vào giở hàng thành công", {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                // chua co
                state.product["quantity"] = 1
                currentAccount?.products.push(state);
                toast.success("Thêm sản phẩm vào giở hàng thành công", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
       

            localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
        }
    };
    if (!state.product) {
        return <div>Product not found</div>;
    }
    const id = state.product.category;
    const name = state.product.name;
    const filterCateProduct = flat.filter((i) => i.category === id);
    const newfilterCateProduct = filterCateProduct.filter((i) => i.name != name);
    const sliceFilter = newfilterCateProduct.slice(0, 4);

    return (
        <>
            <div className="detail d-flex">
                <ul className="left_aside">
                    <li>
                        <img src={state.product.img1} alt="" />
                    </li>
                    <li>
                        <img src={state.product.img2} alt="" />
                    </li>
                    <li>
                        <img src={state.product.img3} alt="" />
                    </li>
                    <li>
                        <img src={state.product.img4} alt="" />
                    </li>
                    <li>
                        <img src={state.product.img5} alt="" />
                    </li>
                </ul>
                <div className="Product_detail d-flex">
                    <div className="img-product">
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <img className="d-block " src={state.product.img1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block " src={state.product.img2} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block " src={state.product.img3} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block " src={state.product.img4} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block " src={state.product.img5} alt="First slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="product-info">
                        <Card className="card-custom">
                            <Card.Body>
                                <Card.Title>{state.product.name}</Card.Title>
                                <div className="price-item">
                                    {state.product.salecost != 0 ? (
                                        <div className="handle-price">
                                            <p className="price-new">
                                                {formatCurrency(state.product.price - state.product.price * (state.product.salecost / 100))}
                                                <span className="salecost"> -{state.product.salecost}%</span>
                                            </p>
                                            <p className="price-old text-center">{formatCurrency(state.product.price)}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <Card.Text className="price_product">{formatCurrency(state.product.price)}</Card.Text>
                                        </div>
                                    )}
                                </div>
                                <Card.Text className="mx-0">
                                    Màu sắc: <span className="text-uppercase fw-bolder">{state.product.color}</span>
                                </Card.Text>
                                <Card.Img className="img-card" variant="bottom" src={state.product.img1} />
                                <div className="size">
                                    <div className="title-pick d-flex">
                                        <span>Kích Thước</span>
                                        <a href="">hướng dẫn chọn kích thước</a>
                                    </div>
                                    <ul className="size-pick d-flex">
                                        <li onClick={() => handleActiveBtn(37)}>
                                            <button className={btn37} value="37" onClick={getValueSize}>
                                                37
                                            </button>
                                        </li>
                                        <li onClick={() => handleActiveBtn(38)}>
                                            <button className={btn38} value="38" onClick={getValueSize}>
                                                38
                                            </button>
                                        </li>
                                        <li onClick={() => handleActiveBtn(39)}>
                                            <button className={btn39} value="39" onClick={getValueSize}>
                                                39
                                            </button>
                                        </li>
                                        <li onClick={() => handleActiveBtn(40)}>
                                            <button className={btn40} value="40" onClick={getValueSize}>
                                                40
                                            </button>
                                        </li>
                                        <li onClick={() => handleActiveBtn(41)}>
                                            <button className={btn41} value="41" onClick={getValueSize}>
                                                41
                                            </button>
                                        </li>
                                        <li onClick={() => handleActiveBtn(42)}>
                                            <button className={btn42} value="42" onClick={getValueSize}>
                                                42
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                            <div className="add d-inline-flex">
                                <Button variant="secondary" className="add-product" onClick={addToCart}>
                                    Thêm vào giỏ
                                </Button>
                                {/* <div className="icon-heart">
                                    <BiHeart />
                                </div> */}
                            </div>
                            <div className="descript">
                                <div className="descript-extend">
                                    <h6 className="mt-3" onClick={() => setOpen(!open)} aria-expanded={open}>
                                        MÔ TẢ
                                    </h6>
                                    <Collapse in={open}>
                                        <p id="example-collapse-text">{state.product.description}</p>
                                    </Collapse>
                                </div>
                                <h6 className="my-3">Ưu đãi thanh toán VNPay</h6>
                                <p>Nhập VNPAYXINH Giảm 100K cho đơn từ 1.500.000 vnđ và 200K cho hóa đơn từ 3.500.000 vnđ</p>
                                <h6>CHÍNH SÁCH ĐỔI HÀNG/ BẢO HÀNH</h6>
                                <p>
                                    Đổi sản phẩm trong thời gian 7 ngày với sản phẩm chưa qua sử dụng, còn nguyên hộp. Sản phẩm được bảo hành trong
                                    thời gian 90 ngày
                                </p>
                                <h6>Tổng đài tư vấn 0919 390 371</h6>
                                <p>(Miễn phí từ 8h30 - 22:00 mỗi ngày)</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="service d-inline-flex">
                    <div className="service-item">
                        <span>
                            FREE <a href="">Shipping for All Orders</a>
                        </span>
                    </div>
                    <div className="service-item">
                        <span>
                            FREE <a href="">Return</a>
                        </span>
                    </div>
                    <div className="service-item">
                        <span>
                            SECURE <a href="">Payment</a>
                        </span>
                    </div>
                </div>
                <div className="another-product my-5 ">
                    <div className="another-cate">
                        <h4 className="text-center mb-5">SẢN PHẨM KHÁC</h4>
                        <div className="slider-item d-flex">
                            <Row lg={4} md={2} sm={2}>
                                {sliceFilter.map((value, key) => (
                                    <ItemComponent value={value} key={key} />
                                ))}
                            </Row>
                        </div>
                    </div>
                    <div className="another-cate">
                        <h4 className="text-center mb-5">CLEAN, CARE & PROTECT</h4>
                        <Row>{filterClean.map((i) => i.map((value, key) => <ItemComponent value={value} key={key} />))}</Row>
                    </div>
                </div>
            </div>
        </>
    );
}
