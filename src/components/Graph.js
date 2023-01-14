import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Graph() {
  const value = [];
  const lab = [];
  for (let i = 1; i <= 1200; i++) {
    value.push(10 * i * Math.random());
    lab.push(i * 10 * Math.random());
  }
  console.log(value);
  const [data, setData] = useState({
    labels: lab,
    datasets: [
      {
        label: "First Dataset",
        data: value,
        // backgroundColor: "#6F7CF0",
        borderColor: "#6F7CF0",
        backgroundImage:
          "linear-gradient(to bottom, #6f7cf0, #9b9bf4, #bfbbf8, #e0dcfc, #ffffff)",
        tension: 0.4,
        fill: true,
        pointStyle: "circle",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  return (
    <div
      className="App"
      style={{ width: "100%", height: "60vh", border: "1px solid black" }}
    >
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Graph;
