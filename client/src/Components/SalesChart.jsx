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
import '../Styles/SalesChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = ({ salesData }) => {
  const monthlyLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels: monthlyLabels,
    datasets: salesData.map((data, index) => ({
      label: data.category,
      data: data.monthlySales,
      backgroundColor: `rgba(${(index * 100) % 255}, 99, 132, 0.6)`,
    })),
  };

  return (
    <div className="sales-chart-container">
      <h2>Category-Wise Sales Amount (Monthly)</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesChart;
