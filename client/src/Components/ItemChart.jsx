import React from "react";
import { Bar } from "react-chartjs-2";

const ItemsChart = ({ salesData }) => {
  const categories = salesData.map((data) => data.category);
  const monthlyLabels = Object.keys(salesData[0].totalItems);

  const data = {
    labels: monthlyLabels,
    datasets: categories.map((category, index) => ({
      label: category,
      data: salesData[index].totalItems,
      backgroundColor: `rgba(${index * 50}, 159, 64, 0.6)`,
    })),
  };

  return (
    <div>
      <h2>Total Items in Each Category (Monthly)</h2>
      <Bar data={data} />
    </div>
  );
};

export default ItemsChart;
