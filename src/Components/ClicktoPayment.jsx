import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Col, Collapse, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../Context/useContext";
import formatCurrency from "../fomartCurrent";
import "/public/payment.css";
export default function ClickToPayment() {
    const { formData, setFormData, city, setCity, district, setDistrict, totalPrice, saveform, setSaveForm } = useContext(Context);
    const [Open, setOpen] = useState(false);
    const [wards, setWards] = useState([]);
    const form = JSON.parse(localStorage.getItem("savedData")) || [];

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then((response) => response.json())
            .then((data) => setCity(data));
    });
    const handleCityChange = (e) => {
        const cityname = e.target.value;
        const cityfilter = city.filter((i) => i.name === cityname);
        const cityId = cityfilter.map((item) => item.code);
        fetch(`https://provinces.open-api.vn/api/p/${cityId}/?depth=3`)
            .then((response) => response.json())
            .then((data) => {
                setDistrict(data.districts);
            });
        setFormData({ ...formData, city: cityname });
    };
    const handleDistrictChange = (event) => {
        const districtName = event.target.value;
        const districtfilter = district.filter((i) => i.name === districtName);
        const districtId = districtfilter.map((i) => i.wards);

        fetch(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`)
            .then((response) => response.json())
            .then((data) => {
                setWards(data.wards);
            });
        setFormData({ ...formData, district: districtName });
    };
    const getNamevalue = (e) => {
        formData.fullName = e.target.value;
    };
    const getEmail = (e) => {
        formData.email = e.target.value;
    };
    const getPhoneNumber = (e) => {
        formData.phoneNumber = e.target.value;
    };

    const getAddress = (e) => {
        formData.address = e.target.value;
    };
    const getNote = (e) => {
        formData.note = e.target.value;
    };

    const currentAccounnt = JSON.parse(localStorage.getItem("currentAccount"));
    const curProductAccount = currentAccounnt.products.map((i) => i.product);
    const saveForm = () => {
        console.log(curProductAccount);
        formData.boughtProduct = [...curProductAccount];
        const newform = [formData];
        setSaveForm(newform);
        localStorage.setItem("savedData", JSON.stringify(newform));
        postAPi();
    };
    const data = JSON.parse(localStorage.getItem("savedData"));
    const sendData = data[0];
    const postAPi = () => {
        toast.success("Đơn hàng của bạn đã cập nhật. Sản phẩm sẽ sớm được gửi đến bạn", {
            position: toast.POSITION.TOP_CENTER,
        });
        const apiUrl = "https://6575bf76b2fbb8f6509d750e.mockapi.io/api/v1/paymentproduct";

        // Thực hiện POST request
        axios
            .post(apiUrl, sendData)
            .then((response) => {
                // Xử lý phản hồi thành công
                console.log("POST request thành công:", response.data);
            })
            .catch((error) => {
                // Xử lý lỗi
                console.error("POST request không thành công:", error);
            });
        // const Spliceproducts = curProductAccount.splice(0, curProductAccount.length);

        // localStorage.setItem("currentAccount", JSON.stringify(Spliceproducts));
    };
    return (
        <div className="payment">
            <Row className="content-payment">
                <Col>
                    <div className="left p-2">
                        <h1>ECCO VIET NAM</h1>
                        <h4>Phương thức thanh toán</h4>
                        <div className="payment method">
                            <Table striped bordered hover size="sm">
                                <tbody>
                                    <tr>
                                        <td className="p-3">
                                            <h5>Thanh toán khi giao hàng (COD)</h5>

                                            <div className="ip-info">
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Control type="text" placeholder="Họ và Tên" onChange={getNamevalue} />
                                                    </Form.Group>
                                                    <div className="email-phone d-inline-flex w-100">
                                                        <Form.Group className="email-ip mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control type="email" placeholder="Email" onChange={getEmail} />
                                                        </Form.Group>
                                                        <Form.Group className="phone-ip mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control type="email" placeholder="Số điện thoại" onChange={getPhoneNumber} />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="address-ip d-inline-flex w-100">
                                                        <Form.Select aria-label="Default select example" onChange={handleCityChange}>
                                                            <option>Chọn Thành Phố</option>
                                                            {city.map((i) => (
                                                                <option key={i.code} value={i.name}>
                                                                    {i.name}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                        <Form.Select aria-label="Default select example" onChange={handleDistrictChange}>
                                                            <option>Chọn quận/huyện</option>
                                                            {district.map((i) => (
                                                                <option key={i.code} value={i.name}>
                                                                    {i.name}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    </div>
                                                    <Form.Group className="mt-3" controlId="exampleForm.ControlInput1" onChange={getAddress}>
                                                        <Form.Control type="text" placeholder="Địa chỉ" />
                                                    </Form.Group>
                                                    <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1" onChange={getNote}>
                                                        <Form.Label>Ghi chú</Form.Label>
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to={"/deploy-ecco-react/cart"} style={{ color: "blue" }}>
                                                    Quay lại giỏ hàng
                                                </Link>
                                                <button className="btn-complete" onClick={saveForm}>
                                                    Hoàn tất đơn hàng
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3" onClick={() => setOpen(!Open)} aria-expanded={Open}>
                                            <h5>Chuyển khoản qua ngân hàng</h5>
                                            <Collapse className="p-3" in={Open}>
                                                <div id="example-collapse-text">
                                                    Quý khách vui lòng thanh toán chuyển khoản trực tiếp vào thông tin tài khoản của ECCO như sau :
                                                    CÔNG TY CỔ PHẦN ĐẦU TƯ THƯƠNG MẠI HIỆP BÌNH STK: 0331003812536 NGÂN HÀNG VIETCOMBANK - CN SÀI GÒN
                                                    - QUẬN 1 Cú pháp ghi chú : [Tên KH] [Gạch ngang] [EC] [Mã đơn hàng] [3 số cuối SDT] [Nội dung muốn
                                                    nhắn thêm nếu có] Sau khi Quý khách thanh toán thành công, vui lòng liên hệ vào hotline 0919390371
                                                    để bộ phận CSKH xác nhận thanh toán và tiến hành xử lí đơn hàng trong thời gian sớm nhất ! Trân
                                                    trọng
                                                </div>
                                            </Collapse>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
                <Col className="right-content">
                    <div className="right">
                        <h4 className="mb-5">Đơn hàng</h4>
                        {curProductAccount.map((i, key) => (
                            <Row>
                                <div className="item-cart d-flex my-2" key={key}>
                                    <div className="desc-item d-inline-flex">
                                        <div className="quantity">{i.quantity}</div>
                                        <img src={i.img1} alt="" />
                                        <div className="name-item">
                                            <p className="span-title">{i.name}</p>
                                            <p className="span-color">
                                                {i.color} / {i.size}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="price-item">{formatCurrency(i.quantity * (i.price - i.price * (i.salecost / 100)))}</span>
                                </div>
                            </Row>
                        ))}
                        <div className="d-flex justify-content-between my-5">
                            <span>Tổng cộng:</span>
                            <span>VND {formatCurrency(totalPrice + 30000)}</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
