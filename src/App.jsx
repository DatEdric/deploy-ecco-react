import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import BaseComponent from "./Components/BaseComponent";
import ClickToPayment from "./Components/ClicktoPayment";
import GolfComponent from "./Components/GolfComponent";
import HomePageComponent from "./Components/HomePageComponent";
import LeatherGoodsComponent from "./Components/LeatherGoodsComponent";
import MenProductComponent from "./Components/MenProductComponent";
import ProductDetailComponent from "./Components/ProductDetailComponent";
import ScrollToTop from "./Components/ScrollToTop";
import ShowCareComponent from "./Components/ShoeCareComponent";
import ShowDetailCartProductComponent from "./Components/ShowDetailCartProdcutComponent";
import ShowroomComponent from "./Components/ShowroomComponent";
import WomanProductComponent from "./Components/WomanProductComponent";
import AppContext from "./Context/useContext";

// import ProductGolfDetailComponent from "./Components/ProductGolfDetailComponent";
// import ProductLeatherDetailComponent from "./Components/ProductLeatherDetailComponent";
// import ProductMenDetailComponent from "./Components/ProductMenDetailComponent";
// import ProductSaleDetailComponent from "./Components/ProductSaleDetailComponent";
// import ProductShoecareDetailComponent from "./Components/ProductShoecareDetailComponent";

function App() {
    return (
        <>
             <AppContext> 
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<BaseComponent />}>
                        <Route index element={<HomePageComponent />} />
                        <Route path="/woman" element={<WomanProductComponent  />} />
                        <Route path="/detail/:status/:id" element={<ProductDetailComponent />} />
                        <Route path="/man" element={<MenProductComponent  />} />
                         <Route path="/golf" element={<GolfComponent  />} />
                         <Route path="/showroom" element={<ShowroomComponent />} />
                         <Route path="/cart" element={<ShowDetailCartProductComponent />} />
                         <Route path="/leathergoods" element={<LeatherGoodsComponent/>} />
                         <Route path="/shoecare" element={<ShowCareComponent />} />
                    <Route path="/payment" element={<ClickToPayment/>} /> 
                    <Route path="/cart/:status/:name" element={<ShowDetailCartProductComponent />} />
                    </Route>
                </Routes>
            </AppContext> 
            <ToastContainer />
            {/*
                       <Route path="/golf/:id" element={<ProductGolfDetailComponent dataProducts={dataProducts} />} />
                        <Route path="/leathergoods/:id" element={<ProductLeatherDetailComponent dataProducts={dataProducts} />} />
                        <Route path="/shoecare/:id" element={<ProductShoecareDetailComponent dataProducts={dataProducts} />} />
                        <Route path="/sale/:id" element={<ProductSaleDetailComponent dataProducts={dataProducts} />} />
                    */}
        </>
    );
}
export default App;
