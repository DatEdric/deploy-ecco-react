import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../Context/useContext";
import ItemComponent from "./ItemComponent";
export default function SearchComponent() {
    const { flat, search, setSearch } = useContext(Context);   
    
    const kq = flat.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            <Row className="products d-flex" lg={4} md={2} sm={2}>
                {kq.map((value,key) => (
                    <ItemComponent value={value} key={key} />
                ))}
            </Row>
        </>
    );
}
