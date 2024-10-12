import React, { useEffect, useState } from "react";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    console.log(data);
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    filterProducts(e.target.value, sortOrder);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    filterProducts(selectedCategory, e.target.value);
  };

  const filterProducts = (category, order) => {
    let updatedProducts = [...products];

    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (order === "Low to High") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "High to Low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <hr />
      <div className="filterwrapper">
        <div>
          <label className="filter">CATEGORY</label>
          <select name="Category" onChange={handleCategoryChange}>
            <option value="">NONE</option>
            <option value="electronics">ELECTRONICS</option>
            <option value="jewelery">JEWELLERY</option>
            <option value="men's clothing">MEN'S CLOTHING</option>
            <option value="women's clothing">WOMEN'S CLOTHING</option>
          </select>
        </div>

        <div>
          <label className="filter">PRICE</label>
          <select name="Sorting" onChange={handleSortChange}>
            <option value="">NONE</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="wrapper">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img className="prodimg" src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
