import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/useContext";
import formatCurrency from "../fomartCurrent";
import "/public/detailCart.css";
export default function ShowDetailCartProductComponent() {


    const { history, sethistory, cartSubTotal, handleUpdateQuantity,user } = useContext(Context);

    const [curAccount,setCurAccount]= useState( JSON.parse(localStorage.getItem("currentAccount")))
    const payment = () => {
        history.length == 0 ? alert("gio hang cua ban khog co san pham") :useNavigatePayment("/deploy-ecco-react/payment");
        
    };
    const useNavigatePayment = useNavigate();

    const delItem = (itemID,sizeItem) => {
        // Xoá sản phẩm cụ thể từ mảng
        const currentAcc = JSON.parse(localStorage.getItem("currentAccount"));
        const updatedData = currentAcc.products.filter((item) => item.product.id !== itemID || item.product.size !== sizeItem );
        console.log(updatedData,"updatedData")
        currentAcc.products = updatedData
        setCurAccount(currentAcc)
        localStorage.setItem("currentAccount", JSON.stringify(currentAcc));

        sethistory(updatedData);
    };
    return (
        <div className="content-cart">
            <h4 className="title">GIỎ HÀNG</h4>
            <div className="bill-content d-flex">
                <div className="left-content">
                    <div className="section d-inline-flex">
                        <div className="name-product">SẢN PHẨM</div>
                        <div className="quantity-product text-center">SỐ LƯỢNG</div>
                        <div className="price-product text-center">GIÁ TIỀN</div>
                        <div className="total-price text-end">TỔNG TIỀN</div>
                    </div>
                    {curAccount?.products?.map((value, key) => (
                        <div className="product-item-detail d-inline-flex" key={key}>
                            <div className="name-product d-inline-flex">
                                <img src={value.product.img1} alt="" className="img-item-product" />
                                <div className="about-product">
                                    <p className="name">{value.product.name}</p>
                                    <p className="color">{value.product.color}</p>
                                    <p className="size">Size: 37</p>
                                </div>
                            </div>
                            <div className="quantity-product text-center">
                                <button className="btn-minus" onClick={() => handleUpdateQuantity("minus", value.product)}>
                                    &#8722;
                                </button>
                                <input type="number" value={value.quantity} className="quantity-input" style={{ width: "25px" }} />
                                <button className="btn-plus" onClick={() => handleUpdateQuantity("plus", value?.product)}>
                                    &#43;
                                </button>
                                <button className="btn-delete-product" onClick={() => delItem(value?.product.id,value?.product?.size)}>
                                    Xoá
                                </button>
                            </div>
                            <div className="price-product text-center">{formatCurrency(value?.product.price - value?.product.price * (value?.product.salecost / 100))}</div>
                            <div className="total-price-product">{formatCurrency(value?.product.quantity * (value?.product.price - value?.product.price * (value?.product.salecost / 100)))}</div>
                        </div>
                    ))}

                    <div className="total-price text-end">
                        Tổng cộng: <span>{formatCurrency(cartSubTotal)}</span>
                    </div>
                </div>
                <div className="right-content">
                    <p className="title-bill mx-0">Tóm tắt đơn hàng</p>
                    <div className="product-value d-inline-flex">
                        <span>Giá trị sản phẩm:</span>
                        <span>{formatCurrency(cartSubTotal)}</span>
                    </div>
                    <div className="amount-total d-inline-flex">
                        <span>Tổng tiền (bao gồm phí giao hàng):</span>
                        <span>{formatCurrency(cartSubTotal + 30000)}</span>
                    </div>
                    <button className="btn-order w-100 p-2" onClick={() => payment(history.id)}>
                        <span>TIẾN HÀNH ĐẶT HÀNG</span>
                    </button>
                    <div className="note-bill">
                        <p className="mx-0 pt-2">
                            NẾU QUÝ KHÁCH CÓ NHU CẦU XUẤT HÓA ĐƠN CÔNG TY - QUÝ KHÁCH VUI LÒNG NHẬP THÔNG TIN TẠI MỤC "GHI CHÚ ĐƠN HÀNG"
                        </p>
                        <img src="https://file.hstatic.net/1000143422/file/vnpay_4d8c6aa79fcd42d2b31fbe350620c4c8.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
