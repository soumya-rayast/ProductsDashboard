import React from "react";
import "../Styles/Filters.css";

const Filters = ({ categories, onCategoryFilter, onSoldFilter, onPriceFilter, onSearch }) => {
    return (
        <div className="filters">
            <h3>Filters</h3>

            <div className="filter_option">
                {/* Category Filter */}
                <label>Category:</label>
                <select onChange={(e) => onCategoryFilter(e.target.value)}>
                    <option value="">All</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="filter_option">
                {/* Sold Filter */}
                <label>Sold:</label>
                <select onChange={(e) => onSoldFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <div className="filter_option">
                {/* Price Filter */}
                <label>Price Range:</label>
                <input type="range" min="0" max="2000" onChange={(e) => onPriceFilter(e.target.value)} />
            </div>

            <div className="filter_option">
                {/* Search Bar */}
                <label>Search:</label>
                <input type="text" placeholder="Search by Title" onChange={(e) => onSearch(e.target.value)} />
            </div>

        </div>
    );
};

export default Filters;
