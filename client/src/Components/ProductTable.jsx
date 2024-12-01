import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ProductTable.css";
import { Backend_API } from "../constant";

const ProductTable = ({ category, sold, price, search }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch products
    useEffect(() => {
        axios
            .get(`${Backend_API}/api/products/getAllProducts`)
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // Filter products whenever filters change
    useEffect(() => {
        let updatedProducts = products;

        if (category) {
            updatedProducts = updatedProducts.filter((product) => product.Category === category);
        }

        if (sold) {
            const isSold = sold === "true";
            updatedProducts = updatedProducts.filter((product) => product.Sold === isSold);
        }

        if (price) {
            updatedProducts = updatedProducts.filter((product) => product.Price <= price);
        }

        if (search) {
            updatedProducts = updatedProducts.filter((product) =>
                product.Title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredProducts(updatedProducts);
    }, [category, sold, price, search, products]);

    return (
        <div className="table-container">
            <h2 >Product Table</h2>
            {filteredProducts.length === 0 ? (
                <p>No products available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Sold</th>
                            <th>Is Sale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product._id}>
                                <td>{product.Title}</td>
                                <td>${product.Price}</td>
                                <td>{product.Description}</td>
                                <td>{product.Category}</td>
                                <td>
                                    <img src={product.Image} alt={product.Title} style={{ width: "50px" }} />
                                </td>
                                <td>{product.Sold ? "Yes" : "No"}</td>
                                <td style={{ color: product.InSale ? "green" : "red" }}>
                                    {product.InSale ? "On Sale" : "Not on Sale"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default ProductTable;
