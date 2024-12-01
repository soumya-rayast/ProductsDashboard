import React, { useState } from "react";
import Filters from "../Components/Filters";
import ProductTable from "../Components/ProductTable";

const Products = () => {
  const [category, setCategory] = useState("");
  const [sold, setSold] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const categories = ["Electronics", "Fitness", "Kitchen", "Furniture", "Clothing", "Accessories"];

  return (
    <div>
      <Filters
        categories={categories}
        onCategoryFilter={setCategory}
        onSoldFilter={setSold}
        onPriceFilter={(value) => setPrice(parseInt(value, 10))}
        onSearch={setSearch}
      />
      <ProductTable
        category={category}
        sold={sold}
        price={price}
        search={search}
      />
    </div>
  );
};

export default Products;
