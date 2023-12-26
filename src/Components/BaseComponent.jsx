import React, { useContext } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BsCartPlus, BsFillPersonFill, BsGeoAlt, BsSearch } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../Context/useContext";
import CartProductComponent from "./CartProductComponent";
import FooterComponent from "./FooterComponent";
import SearchComponent from "./SearchComponent";
import ShowLoginComponent from "./ShowLoginComponent";
import "/public/style.css";

export default function BaseComponent() {
    const { showsearch, setShowSearch, history } = useContext(Context);
    const showInputSearch = () => {
        setShowSearch(!showsearch);
    };
    const inputsearch = `header_search ${showsearch ? "show" : ""}`;
    const { show, setShow, showCart, setShowCart, search, setSearch, cartCount, user, setUser, callUser, setCallUser } = useContext(Context);
    const handleOnclick = (e) => {
        e.preventDefault();
        setShow(true);
    };
    const ClicktoCart = (e) => {
        e.preventDefault();
        setShowCart(true);
    };
    const handleOnChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const logOut = () => {
        setUser([]);
    };

    return (
        <>
            <div className="header">
                <Navbar expand="lg" className="bg-white px-3 d-flex">
                    <div className="logo-header">
                        <Link to={"/"} className="logo-web nav-link">
                            <img className="nav_img" src="/public/images/logo.jpg" alt="Logo" />
                        </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="header_option me-auto">
                            <Link to={"/"} className="nav-link">
                                HOME
                            </Link>
                            <Link to={"/woman"} className="nav-link">
                                NỮ
                            </Link>
                            <Link to={"/man"} className="nav-link">
                                NAM
                            </Link>
                            <Link to={"/golf"} className="nav-link">
                                GOLF
                            </Link>
                            <Link to={"/leathergoods"} className="nav-link">
                                LEATHER GOODS
                            </Link>
                            <Link to={"/shoecare"} className="nav-link">
                                SHOE CARE
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="input-search">
                        <Form className={inputsearch}>
                            <FormControl type="text" placeholder="Tìm sản phẩm" className="" onChange={handleOnChangeSearch} />
                            {/* <Button variant="outline-secondary" className="search_button">
                                <BsSearch />
                            </Button> */}
                        </Form>
                        <div className="show-search" onClick={showInputSearch}>
                            <BsSearch className="icon-search" />
                        </div>
                    </div>
                    <div className="header_infomation ">
                        <ul className="infomation_shop d-inline-flex  align-items-center ">
                            <Link>
                                {user.length == 0 ? (
                                    <BsFillPersonFill onClick={handleOnclick} />
                                ) : (
                                    <span className="user-name">
                                        {user.map((i) => i.name)}{" "}
                                        <span className="hover-cls" onClick={logOut}>
                                            Đăng Xuất
                                        </span>
                                    </span>
                                )}
                            </Link>
                            <Link to={"/showroom"} className="nav-link">
                                <BsGeoAlt />
                            </Link>
                            <Link onClick={ClicktoCart} className="link-cart">
                                <BsCartPlus className="i-cart" />
                                <span>{cartCount == 0 ? "" : cartCount}</span>
                            </Link>
                        </ul>
                    </div>
                </Navbar>
            </div>
            <ShowLoginComponent show={show} setshow={setShow} />
            <CartProductComponent showCart={showCart} setShowCart={setShowCart} />
            {search == "" ? <Outlet /> : <SearchComponent />}
            <FooterComponent />
        </>
    );
}
