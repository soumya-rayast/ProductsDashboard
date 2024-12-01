import React from "react";
import SalesChart from "../Components/SalesChart";
import ItemChart from "../Components/ItemChart";
import '../Styles/Dashboard.css';

const Dashboard = () => {
  const salesData = [
    {
      category: "Electronics",
      monthlySales: [1200, 1900, 3000, 5000, 6000, 7000],
      totalItems: [30, 45, 55, 60, 70, 80],
    },
    {
      category: "Clothing",
      monthlySales: [1500, 2300, 4000, 3500, 4500, 8000],
      totalItems: [25, 35, 40, 45, 50, 60],
    },
    {
      category: "Furniture",
      monthlySales: [800, 1500, 2500, 4000, 4200, 5000],
      totalItems: [20, 25, 30, 35, 40, 50],
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="chart-container">
        <SalesChart salesData={salesData} />
      </div>
      <div className="chart-container">
        <ItemChart salesData={salesData} />
      </div>
    </div>
  );
};

export default Dashboard;
