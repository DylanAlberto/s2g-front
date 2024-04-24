import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import defaultColors from './colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({
  data,
  colors = [defaultColors.primary, defaultColors.secondary],
}: {
  data: { x: number; y: number }[];
  colors?: string[];
}) => {
  const chartData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Data',
        data: data || [],
        backgroundColor: colors || [],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};
export default ChartComponent;
