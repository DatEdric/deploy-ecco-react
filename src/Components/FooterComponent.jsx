import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsChatDots, BsEnvelope, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { Context } from "../Context/useContext";
import "/public/footer_Css.css";

export default function FooterComponent() {
    const { active, setActive } = useContext(Context);
    const [email, setEmail] = useState("");
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const sendEmail = () => {
        console.log(email);
    }
    const handleClickActive = () => {
        setActive(!active);
    };
    const btnActive = `btnActive ${active ? "active" : ""}`;
    return (
        <div className="footer mt-3">
            <div className="send-email d-flex py-4">
                <div className="left d-inline-flex align-content-center text-center">
                    <BsFillEnvelopeFill className="email-icon" />
                    <p className="title-send-email">Đăng kí email để nhận ngay các thông tin mới nhất từ ECCO</p>
                </div>
                <div className="right d-flex">
                    <Form>
                        <Form.Group className="inputEmail" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="email" onClick={handleClickActive} onChange={getEmail}/>
                            <Button variant="secondary" className={btnActive} onClick={sendEmail}>
                                Send Email
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <footer className="">
                <div className="footer_top d-flex">
                    <Row>
                        <Col>
                            <h5>Thông tin liên hệ</h5>
                            <ul className="">
                                <li>Công ty Cổ phần Đầu Tư - Thương Mại Hiệp Bình</li>
                                <li>Địa chỉ: Số 156 Nguyễn Trãi, Phường Bến Thành, Quận 1, TPHCM</li>
                                <li>Số ĐKKD 0304198785 do Sở Kế hoạch đầu tư TP HCM cấp ngày 09/02/2006 </li>
                            </ul>
                            <ul>
                                <li>THỜI GIAN LÀM VIỆC</li>
                                <li>Thứ 2 - thứ 6 hàng tuần,</li>
                                <li>8.00 giờ sáng – 5.00 giờ chiều</li>
                            </ul>
                            <ul>
                                <li>eccocare@tbsretail.vn</li>
                                <li>Hotline: (028) 39 255 200</li>
                            </ul>
                        </Col>
                        <Col className="null-col"></Col>
                        <Col className="medium-col">
                            <h5>Hỗ trợ khách hàng</h5>
                            <ul className="footer_link">
                                <li>Hỏi Đáp</li>
                                <li>Hướng dẫn đặt hàng</li>
                                <li>Phương thức thanh toan</li>
                                <li>Hướng dẫn chăm sóc sản phẩm</li>
                                <li>Hệ Thống Cửa Hàng</li>
                                <li>ECCO Toàn Cầu</li>
                            </ul>
                        </Col>
                        <Col className="medium-col">
                            <h5>Chính sách</h5>
                            <ul className="footer_link">
                                <li>Chính sách thành viên TBS Retail</li>
                                <li>Chính Sách Giao Hàng</li>
                                <li>Chính Sách Bảo Hành & Đổi sản phẩm</li>
                                <li>Chính Sách Bảo Mật</li>
                                <li>Điều Khoản Sử Dụng</li>
                            </ul>
                        </Col>
                        <Col className="medium-col">
                            <h5>Giới thiệu</h5>
                            <ul className="footer_link">
                                <li>Khám phá ECCO</li>
                                <li>Di Sản ECCO</li>
                                <li>Lịch Sử Thương Hiệu</li>
                                <li>Công Nghệ Đột Phá</li>
                                <li>Phát Triển Bền Vững</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                {/* <div> */}
                <div className="contact">
                    <ul className="contact_page">
                        <li>
                            <a href="">
                                <BsChatDots /> Chat
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFillTelephoneFill /> 0919390371
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsEnvelope /> Email
                            </a>
                        </li>
                    </ul>
                </div>
                {/* </div> */}
                <div className="footer_bottom">
                    <h4 className="social_title">KẾT NỐI VỚI ECCO</h4>
                    <ul className="social_list">
                        <li>
                            <a href="https://www.facebook.com/eccoshoesvietnam/">
                                <img src="https://file.hstatic.net/1000143422/file/icons8-facebook-50_c6132bb0443e424e843ed37694a654a7.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ecco/">
                                <img src="https://file.hstatic.net/1000143422/file/mail-250_174aef1087354aa194fca0dd13194a1d.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/eccosko">
                                <img src="https://file.hstatic.net/1000143422/file/icons8-youtube-48_d4b7720b7f9342498ebd7b3a26fc20d6.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@ecco">
                                <img src="	https://file.hstatic.net/1000143422/file/tiktok-icon_4b848a254396446386d97c384523301d.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://eccovietnam.vn/pages/lien-he">
                                <img src="https://file.hstatic.net/1000143422/file/mail-250_174aef1087354aa194fca0dd13194a1d.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="insnection_stamps">
                    <a href="http://online.gov.vn/Home/WebDetails/32098">
                        <img src="https://theme.hstatic.net/1000143422/1001166886/14/logo-bct.png?v=52" alt="" />
                    </a>
                </div>
                <div className="copy_right">
                    <p>
                        <span>Copyright © 2011 - 2021 TBSRetail - một thành viên của TBSGroup | All right reserved</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
