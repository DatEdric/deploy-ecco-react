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



function App() {
    return (
        <>
             <AppContext> 
                <ScrollToTop />
                <Routes>
                    <Route path="/deploy-ecco-react/" element={<BaseComponent />}>
                        <Route index element={<HomePageComponent />} />
                        <Route path="/deploy-ecco-react/woman" element={<WomanProductComponent  />} />
                        <Route path="/deploy-ecco-react/detail/:status/:id" element={<ProductDetailComponent />} />
                        <Route path="/deploy-ecco-react/man" element={<MenProductComponent  />} />
                         <Route path="/deploy-ecco-react/golf" element={<GolfComponent  />} />
                         <Route path="/deploy-ecco-react/showroom" element={<ShowroomComponent />} />
                         <Route path="/deploy-ecco-react/cart" element={<ShowDetailCartProductComponent />} />
                         <Route path="/deploy-ecco-react/leathergoods" element={<LeatherGoodsComponent/>} />
                         <Route path="/deploy-ecco-react/shoecare" element={<ShowCareComponent />} />
                    <Route path="/deploy-ecco-react/payment" element={<ClickToPayment/>} /> 
                    <Route path="/deploy-ecco-react/cart/:status/:name" element={<ShowDetailCartProductComponent />} />
                    </Route>
                </Routes>
            </AppContext> 
            <ToastContainer />

        </>
    );
}
export default App;
