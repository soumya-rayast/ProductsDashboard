import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/ProductTable.css";
import { Backend_API } from "../constant";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    axios
      .get(`${Backend_API}/getAllProducts`)
      .then((response) => {
        console.log("Fetched Products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);


  return (
    <div>
      <h2>Product Table</h2>
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
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "50px" }}
                  />
                </td>
                <td>{product.sold ? "Yes" : "No"}</td>
                <td style={{ color: product.inSale ? "green" : "red" }}>
                  {product.inSale ? "On Sale" : "Not on Sale"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
