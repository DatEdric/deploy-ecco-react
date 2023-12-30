import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

AppContext.propTypes = {
    children: PropTypes.node,
};

function AppContext({ children }) {
    const [saveform, setSaveForm] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        district: "",
        address: "",
        note: "",
        boughtProduct: [],
    });
    const [totalPrices, setTotalPrice] = useState("");
    const [user, setUser] = useState([]);
    const [account, setAccount] = useState([]);
    const inittalUser = JSON.parse(localStorage.getItem("currentAccount")) || {};
    const [callUser, setCallUser] = useState(inittalUser);
    const [maleShoe, setMaleShoe] = useState("");
    const [femaleShoe, setFemaleShoe] = useState([]);
    const [data, setData] = useState([]);
    const [regis, setRegis] = useState(false);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [filterShoe, setFilterShoe] = useState([]);
    const [showsearch, setShowSearch] = useState(false);
    const [payment, setPayment] = useState(false);
    const [detailCart, setDetailCart] = useState(false);
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [search, setSearch] = useState("");
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const [cartCount, setCartCount] = useState(0);
    const [productAccount, setProductAccount] = useState([]);
    const [name, setName] = useState("");
    // const [totalPrice, setTotalPrice] = useState(0)

    const currentAccount = JSON.parse(localStorage.getItem("currentAccount")) || {};
    useEffect(() => {
        const totalPrice = currentAccount.products.reduce(
            (accumulator, item) =>
                accumulator +
                (Number(item.product.price) - (Number(item.product.salecost) / 100) * Number(item.product.price)) * item.product.quantity,
            0
        );
        
        let count = 0
         currentAccount.products.map((i) => {
            count += 1;
        });
        setCartCount(count);
        setTotalPrice(totalPrice);
    }, [currentAccount]);
    // console.log(totalPrices);
    // Fetch api từ mock api về
    useEffect(() => {
        fetch("https://6575bf76b2fbb8f6509d750e.mockapi.io/api/v1/dataProducts")
            .then((respons) => respons.json())
            .then((result) => setData(result));
    }, []);

    // console.log(callUser.products.map(i => i.product));

    // useEffect(() => {
    //     let total = 0;
    //     cart.map((value) => {
    //         total += value.quantity * (value.price - value.price * (value.salecost / 100));
    //         setCartSubTotal(total);
    //     });
    // }, [cart]);
    // hàm tính tổng giá tiền, và đém
    // console.log(callUser);
    // useEffect(() => {
    //     let count = 0;
    //     callUser.products.map(i => {
    //         count += 1
    //     })
    //     setCartCount(count);
    //     const total = callUser.products.reduce((sum, value) => sum + value.quantity * (value.price - value.price * (value.salecost / 100)), 0);
    //     setCartSubTotal(total);
    // }, [callUser]);

    //lấy ra id của các mảng sản phẩm
    const femaleProduct = data.filter((i) => i.id === 1);
    const nuproduct = femaleProduct.map((a) => a.products);
    const maleProduct = data.filter((i) => i.id === 2);
    const namproduct = maleProduct.map((a) => a.products);
    const golfProduct = data.filter((i) => i.id === 3);
    const golf = golfProduct.map((a) => a.products);
    const leatherProduct = data.filter((i) => i.id === 4);
    const leather = leatherProduct.map((a) => a.products);
    const shoecareProduct = data.filter((i) => i.id === 5);
    const shoecare = shoecareProduct.map((a) => a.products);
    const combine = [...nuproduct, ...namproduct, ...golf, ...leather, ...shoecare]; // gộp các mảng lại để tạo 1 mảng chứa toàn bộ các sản phẩm ( search)
    const flat = combine.flat(Infinity); // làm phẳng mảng sâu
    return (
        <Context.Provider
            value={{
                callUser,
                setCallUser,
                totalPrices,
                setTotalPrice,
                account,
                setAccount,
                saveform,
                setSaveForm,
                name,
                setName,
                productAccount,
                setProductAccount,
                user,
                setUser,
                cartSubTotal,
                setCartSubTotal,
                flat,
                femaleShoe,
                setFemaleShoe,
                data,
                setData,
                formData,
                setFormData,
                show,
                setShow,
                regis,
                setRegis,
                active,
                setActive,
                showCart,
                setShowCart,
                email,
                setEmail,
                password,
                setPassword,
                navigate,
                filterShoe,
                setFilterShoe,
                showsearch,
                setShowSearch,
                search,
                setSearch,
                payment,
                setPayment,
                detailCart,
                setDetailCart,
                city,
                setCity,
                district,
                setDistrict,
                maleShoe,
                setMaleShoe,
                cartCount,
                setCartCount,
            }}
        >
            {children}
        </Context.Provider>
    );
}
export default AppContext;
