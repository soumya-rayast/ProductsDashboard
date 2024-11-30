import React from "react";
import { Bar } from "react-chartjs-2";

const SalesChart = ({ salesData }) => {
  const categories = salesData.map((data) => data.category);
  const monthlyLabels = Object.keys(salesData[0].monthlySales);

  const data = {
    labels: monthlyLabels,
    datasets: categories.map((category, index) => ({
      label: category,
      data: salesData[index].monthlySales,
      backgroundColor: `rgba(${index * 50}, 99, 132, 0.6)`,
    })),
  };

  return (
    <div>
      <h2>Category-Wise Sales Amount (Monthly)</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesChart;
