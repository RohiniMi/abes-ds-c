import React, { useEffect, useState } from 'react';
const Header = () => {
    return (
        <div className="header">header</div>
    )
}
const Search = () => {
    return (
        <div className="search">
            <input type="text" name="search" id="search" />
            <button>search</button>
        </div>
    )
}
const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.img} alt="img-here" />
            <h3>{product.title}</h3>
        </div>
    )
}
const Body = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("unable to load data", error))
    }, [])

    return (
        <div className="body">
            <Search />
            <div className="product-container" style=
                {{
                    display: "flex", flexWrap: "wrap", gap: "30px"
                }}>
                {products.map((product) => <Product product={product} />)}
            </div>
        </div>
    )
}
const Footer = () => {
    return (
        <div className="footer">
            Footer
        </div>
    )
}
const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Body