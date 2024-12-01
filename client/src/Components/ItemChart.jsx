import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import '../Styles/ItemChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ItemsChart = ({ salesData }) => {
  const monthlyLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  
  const data = {
    labels: monthlyLabels,
    datasets: salesData.map((data, index) => ({
      label: data.category,
      data: data.totalItems,
      backgroundColor: `rgba(${(index * 100) % 255}, 159, 64, 0.6)`,
    })),
  };

  return (
    <div className="items-chart-container">
      <h2>Total Items in Each Category (Monthly)</h2>
      <Bar data={data} />
    </div>
  );
};

export default ItemsChart;
