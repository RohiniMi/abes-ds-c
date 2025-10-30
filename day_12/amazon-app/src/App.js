import './App.css';
const productObject = {
    img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg",
    title: "Home decor",
    price: "price"
}
const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo-here" />
            <h2>Amazon Webpage</h2>
            <ul className="nav-list">
                <li>Home</li>
                <li>Cart</li>
                <li>About</li>
            </ul>
        </div>
    )
}
const Search = () => {
    return (
        <div className='search'>
            <input type="text" name="search" id="search"></input>
            <input type="button" value="search" ></input>
        </div>
    )
}
const Product = () => {
    return (
        <div className='product'>
            <img className='prod-img' src={productObject.img} alt="product-img" />
            <h4>{productObject.title}</h4>
            <h5>{productObject.price}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className='body-container'>
            <Search />
            <div className='prod-container'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
const Footer =()=>{
    return(
        <div className='footer'>
              <p>copyright ABES-DS-C, 2025</p>
        </div>
    )
}
const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}
export default App