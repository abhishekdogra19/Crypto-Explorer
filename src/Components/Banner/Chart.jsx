import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering necessary components and scales with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    // Format the date based on the selected time range
    if (days === "24h") {
      date.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      date.push(new Date(arr[i][0]).toLocaleDateString());
    }
    prices.push(arr[i][1]);
  }

  const data = {
    labels: date, // Array of formatted dates
    datasets: [
      {
        label: `Price in ${currency}`, // Label for the dataset
        data: prices, // Array of prices
        borderColor: "orange", // Border color of the line chart
        backgroundColor: "rgba(255,99,132,0.5)", // Background color of the line chart
      },
    ],
  };

  return <Line options={{ responsive: true }} data={data} />;
};

export default Chart;
