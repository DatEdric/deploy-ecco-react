import PropTypes from "prop-types";
import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/useContext";
import formatCurrency from "../fomartCurrent";
ItemComponent.propTypes = {
    value: PropTypes.object,
};
export default function ItemComponent({ value }) {
    const { search, setSearch, sethistory,history } = useContext(Context);
    const detailProduct = useNavigate();
    const handledetail = (value) => {
        detailProduct(`/detail/${value.category}/${value.id}`, { state: { product: value } });
        setSearch("");
        // localStorage.setItem("currentAccount", JSON.stringify({
        //     name:"",
        //     email: "",
        //     products:[],
        // }));
    };
    // const buyProduct = (value) => {
    //     detailProduct(`/cart/${value.category}/${value.name}`, { state: value  });
    //     setSearch("")
    //     const isProductExist = history.some(
    //         (item) => item.id === value.id
    //       );
    //       if (!isProductExist) {
    //         sethistory((current) => [...current, value]);
    //          toast.success("Thêm sản phẩm vào giở hàng thành công", {
    //            position: toast.POSITION.TOP_CENTER,
    //          });
    //         console.log("thêm thành công");
    //       }
    //       else {
    //         const updatedHistory = history.map((item) =>
    //           item.id === value.id
    //             ? { ...item, quantity: item.quantity + 1 }
    //             : item
    //         );
    //         sethistory(updatedHistory);
    //         toast.success("Thêm sản phẩm vào giở hàng thành công", {
    //           position: toast.POSITION.TOP_CENTER,
    //         });
    //       }
    // };
    return ( 
        <>
            <Col>
                <Card className="product" onClick={() => handledetail(value)}>
                    <div className="imagecard" >
                        <Card.Img className="img1" variant="top" src={value.img1}/>
                        <Card.Img className="img2" variant="top" src={value.img2} />
                    </div>
                    <Card.Body>
                        <Card.Title className="name_product text-center">{value.name}</Card.Title>
                        <div className="price-item">
                            {value.salecost != 0 ? (
                                <div className="handle-price w-100">
                                    <p className="price-new text-center">
                                        {formatCurrency(value.price - value.price * (value.salecost / 100))}
                                        <span className="salecost"> -{value.salecost}%</span>
                                    </p>
                                    <p className="price-old text-center">{formatCurrency(value.price)}</p>
                                </div>
                            ) : (
                                <div>
                                    <Card.Text className="price_product text-center">{formatCurrency(value.price)}</Card.Text>
                                </div>
                            )}
                        </div>
                        <span className="sticky_product">new</span>
                        <Button className="btn-buy" variant="primary" 
                        // onClick={() => buyProduct(value)}
                        >
                            Mua ngay
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}
