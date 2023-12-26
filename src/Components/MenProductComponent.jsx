import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Context } from "../Context/useContext";
import ItemComponent from "./ItemComponent";
import "/public/baseproduct.css";

export default function MenProductComponent() {
    const { data } = useContext(Context);
    const [shoes, setShoe] = useState([]);
    const menProducts = data.filter((a) => a.id === 2);
    const [priceFilter, setPriceFilter] = useState("all");
    const [genderFilter, setGenderFilter] = useState("all");
    const [minPrice, maxPrice] = priceFilter.split("-").map((value) => parseInt(value));
    const [sortOption, setSortOption] = useState("default");

    const applySortOption = (value) => {
        switch (sortOption) {
            case "price-asc":
                // Logic sắp xếp theo giá thấp đến cao
                return [...value].sort((a, b) => {
                    const discountedPriceA = a.salecost ? a.price - a.price * (a.salecost / 100) : a.price;
                    const discountedPriceB = b.salecost ? b.price - b.price * (b.salecost / 100) : b.price;
                    return discountedPriceA - discountedPriceB;
                });
            case "price-desc":
                // Logic sắp xếp theo giá cao xuống thấp
                return [...value].sort((a, b) => {
                    const discountedPriceA = a.salecost ? a.price - a.price * (a.salecost / 100) : a.price;
                    const discountedPriceB = b.salecost ? b.price - b.price * (b.salecost / 100) : b.price;
                    return discountedPriceB - discountedPriceA;
                });
            default:
                // Mặc định là không sắp xếp
                return value;
        }
    };
    const filteredProducts = shoes.map((value) => {
        const filtered = applySortOption(
            value.filter((product) => {
                const discountedPrice = product.salecost ? product.price - product.price * (product.salecost / 100) : product.price;

                return (
                    (priceFilter === "all" || (discountedPrice >= minPrice && discountedPrice <= maxPrice)) &&
                    (genderFilter === "all" || product.category === genderFilter)
                );
            })
        );

        return filtered.length > 0 ? (
            filtered.map((product, key) => (
                <Col>
                    <ItemComponent value={product} key={key} />
                </Col>
            ))
        ) : (
            <div className="result-search" key={"not_found"}>
                <h2>Không tìm thấy sản phẩm</h2>
            </div>
        );
    });
    // lọc sản phẩm được mua nhiều nhất
    const handleBestsellerFilter = () => {
        const shoe = menProducts.map((i) => i.products.filter((value) => value.bestseller === true));
        setShoe(shoe);
    };
    // lọc sản phẩm là phụ kiện
    const handleAccessoryFilter = () => {
        const shoe = menProducts.map((i) => i.products.filter((value) => value.type === "accessory"));
        setShoe(shoe);
    };
    // lọc các sản phẩm là giày
    const handleShoeFilter = () => {
        const shoe = menProducts.map((i) => i.products.filter((value) => value.type === "shoes"));
        setShoe(shoe);
    };
    return (
        <div className="">
            <div className="banner">
                <img
                    src="https://file.hstatic.net/1000143422/collection/ec-banner_collection_1920x400px___1_4fb96b944acb4d32a890171d4a693607_master.png"
                    alt=""
                />
            </div>

            <h2 className="title_page text-center mt-4 ">Nam</h2>

            <div className="option_woman d-inline-flex">
                <Button variant="secondary" onClick={handleShoeFilter}>
                    Giày
                </Button>
                <Button variant="secondary" onClick={handleAccessoryFilter}>
                    Phụ Kiện
                </Button>
                <Button variant="secondary" onClick={handleBestsellerFilter}>
                    Bestsellers
                </Button>
            </div>

            <div className="filter_tools d-inline-flex">
                <div className="display_product d-inline-flex w-50">
                    <Form.Select
                        aria-label="Default select example"
                        style={{ height: "40px", width: "120px" }}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="default">Sắp Xêp</option>
                        <option value="price-asc">Thấp đến cao</option>
                        <option value="price-desc">Cao đến thấp</option>
                    </Form.Select>
                    <span className="total-product">
                        Hiển thị{" "}
                        {filteredProducts.map((i) => i.length) == 0
                            ? menProducts.map((i) => i.products.length)
                            : filteredProducts.map((i) => i.length)}{" "}
                        sản phẩm
                    </span>
                </div>
                <div className="tools d-inline-flex">
                    <Form.Select
                        aria-label="Default select example"
                        className="color-option"
                        style={{ height: "40px", width: "110px" }}
                        onChange={(e) => setGenderFilter(e.target.value)}
                    >
                        <option value="all">Giới Tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="unisex">Unisex</option>
                    </Form.Select>
                    <Form.Select
                        aria-label="Default select example"
                        className="price-option"
                        style={{ height: "40px", width: "80px" }}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    >
                        <option value="all">Giá</option>
                        <option value="0000000-3000000">Dưới 3 Tr</option>
                        <option value="3000000-5000000">Từ 3-5 Tr</option>
                        <option value="5000000-10000000">Từ 5- 10 Tr</option>
                        <option value="10000000-50000000">Trên 10 tr</option>
                    </Form.Select>
                </div>
            </div>
            <Row className="products d-flex" lg={4} md={2} sm={2}>
                {shoes.length == 0 ? (
                    <>{menProducts.map((i) => i.products.map((product, key) => <ItemComponent value={product} key={key} />))}</>
                ) : (
                    <>{filteredProducts}</>
                )}
            </Row>
        </div>
    );
}
