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
    const { show, setShow, showCart, setShowCart, search, setSearch, cartCount, user, setUser,account, setAccount } = useContext(Context);
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
    const currentAcc = JSON.parse(localStorage.getItem("currentAccount"));
    const usersAccount = JSON.parse(localStorage.getItem("userAccounts"));
        usersAccount.forEach((item,index)=>{
        if(item.name === currentAcc.name)
        {
            console.log(item,"checkk");
            usersAccount[index] = currentAcc
        }
    })
    localStorage.setItem("userAccounts", JSON.stringify(usersAccount));
    localStorage.setItem("currentAccount", JSON.stringify({}));



        // setAccount([]);
    };
    // console.log(user);
    const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

    return (
        <>
            <div className="header">
                <Navbar expand="lg" className="bg-white px-3 d-flex">
                    <div className="logo-header">
                        <Link to={"/deploy-ecco-react/"} className="logo-web nav-link">
                            <img className="nav_img" src="https://theme.hstatic.net/1000143422/1001183805/14/logo.png?v=8" alt="Logo" />
                        </Link>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="header_option me-auto">
                            <Link to={"/deploy-ecco-react/"} className="nav-link">
                                HOME
                            </Link>
                            <Link to={"/deploy-ecco-react/woman"} className="nav-link">
                                NỮ
                            </Link>
                            <Link to={"/deploy-ecco-react/man"} className="nav-link">
                                NAM
                            </Link>
                            <Link to={"/deploy-ecco-react/golf"} className="nav-link">
                                GOLF
                            </Link>
                            <Link to={"/deploy-ecco-react/leathergoods"} className="nav-link">
                                LEATHER GOODS
                            </Link>
                            <Link to={"/deploy-ecco-react/shoecare"} className="nav-link">
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
                                {/* {user.length == 0 ? (
                                    <BsFillPersonFill onClick={handleOnclick} />
                                ) : ( */}
                                    {/* <span className="user-name">
                                        {currentAccount.name}
                                        <span className="hover-cls" onClick={logOut}>
                                            Đăng Xuất
                                        </span>
                                    </span> */}
                                {/* )} */}
                                <BsFillPersonFill onClick={handleOnclick} />
                            </Link>
                            <Link to={"/deploy-ecco-react/showroom"} className="nav-link">
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
