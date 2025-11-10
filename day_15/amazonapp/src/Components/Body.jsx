import React, { useEffect, useState } from 'react'
import Search from './Search';
import Products from './Products';
const Body = () => {
    const [products, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredData(data);
            })
            .catch((error) => console.log("Unable to load data", error))
    }, [])
    const searchHandler = (query) => {
        const data = products.filter(
            (product) => product.title.toLowerCase().includes(query.toLowerCase()))
        setFilteredData(data);
    }
    return (
        <div className="body">
            <Search searchHandler={searchHandler} />
            <div className="products-container" style={{ display: "flex", flexWrap: "wrap", gap: "45px" }}>
                {filteredData.map((product) => <Products product={product} />)}
            </div>
        </div>
    )
}

export default Body