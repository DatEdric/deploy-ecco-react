import { useContext, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../Context/useContext";
import "/public/modal.css";

export default function ShowLoginComponent() {
    const { show, setShow, setUser, history, name, setName, user, setAccount } = useContext(Context);
    const { regis, setRegis } = useContext(Context);
    const { email, setEmail } = useContext(Context);
    const { password, setPassword } = useContext(Context);
    const { navigate } = useContext(Context);
    const [confirm, setConfirm] = useState("");

    // đăng nhập tài khoản
    const handleLogin = () => {
        // Lấy danh sách tài khoản từ local storage
        const userAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];
        // Kiểm tra xem tài khoản có tồn tại trong danh sách không
        const accountExists = userAccounts.some((account) => account.email === email && account.password === password);
        const accountUser = userAccounts.filter((i) => i.email === email);
        // Nếu tài khoản không tồn tại, hiển thị thông báo
        if (!accountExists) {
            alert("Tài khoản không tồn tại");
        } else {
            // Nếu tài khoản tồn tại, chuyển hướng đến trang chủ
            setShow(false);
            setRegis(false);
            // navigate("/");
            setPassword("");
            setEmail("");
            localStorage.setItem("currentAccount", JSON.stringify(accountUser[0]));
            }
    };

    // Tạo tài khoản
    const handleCreateAcc = () => {
        if (email === "") {
            alert("vui lòng điển đầy đủ vào UserName");
        } else if (password === "") {
            alert("vui lòng điển đầy đủ vào PassWord");
        } else if (confirm === "") {
            alert("vui lòng điển đầy đủ vào Confirm PassWord");
        } else if (email && password) {
            if (password !== confirm) {
                alert("mật khẩu của bạn không trùng khớp");
            } else {
                // Lấy danh sách tài khoản từ local storage (nếu có)
                const existingAccounts = JSON.parse(localStorage.getItem("userAccounts")) || [];

                //Kiểm tra xem tài khoản có tồn tại không
                const accountExists = existingAccounts.some((account) => account.email === email);
                // Nếu tài khoản không tồn tại, thêm vào danh sách
                if (!accountExists) {
                    const newAccount = {
                        name: name,
                        email: email,
                        password: password,
                        products:[]
                    };
                    // Thêm tài khoản vào danh sách
                    existingAccounts.push(newAccount);

                    // Lưu danh sách tài khoản vào local storage
                    localStorage.setItem("userAccounts", JSON.stringify(existingAccounts));
                    alert("bạn đăng ký thành công");
                    // Chuyển hướng đến trang chủ
                    navigate("/deploy-ecco-react/");
                    setRegis(false);
                    setShow(false);
                    setEmail("");
                    setPassword("");
                    const arrUser = JSON.parse(localStorage.getItem("userAccounts")) || []
                    setUser(arrUser)
                } else {
                    alert("Tài khoản đã tồn tại");
                }
            }
        }
        // else {
        //     alert("Vui lòng nhập đầy đủ thông tin đăng ký");
        // }
    };
    const handleRegister = (e) => {
        setRegis(true);
    };
    const handleTurnLogin = (e) => {
        setRegis(false);
        setShow(true);
    };
    const getfullname = (e) => {
        setName(e.target.value);
    };
    const getvalueEmail = (e) => {
        setEmail(e.target.value);
    };
    const getvaluePass = (e) => {
        setPassword(e.target.value);
    };
    const getConfirmPass = (e) => {
        setConfirm(e.target.value);
    };
    return (
        <div div className="modal_login">
            <Modal show={show} onHide={() => setShow(false)} className="modal_login_form">
                {regis == true ? (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Đăng Ký</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Tên" onChange={getfullname} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email hoặc số điện thoại" value={email} onChange={getvalueEmail} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={getvaluePass} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" onChange={getConfirmPass} />
                                </Form.Group>
                            </Form>
                            <div className="btn-log-in text-center">
                                <p
                                    onClick={() => {
                                        handleTurnLogin();
                                    }}
                                >
                                    you have an account ?
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCreateAcc}>
                                Register
                            </Button>
                        </Modal.Footer>
                    </>
                ) : (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>Đăng Nhập</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2" type="email" value={email} onChange={getvalueEmail}>
                                        UserName
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="email" placeholder="Email hoặc số điện thoại" value={email} onChange={getvalueEmail} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Password
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="password" placeholder="Password" value={password} onChange={getvaluePass} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="dark" onClick={() => handleLogin()}>
                                Log in
                            </Button>
                        </Modal.Footer>
                        <div className="another_login">
                            <span href="" className="link_to_register" onClick={() => handleRegister()}>
                                Register an account
                            </span>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                    </>
                )}
            </Modal>
            {/* <RegisterComponent regis={regis} setRegis={setRegis} /> */}
        </div>
    );
}
