import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }: { data: { x: number, y: number }[] }) => {
  const chartData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Data',
        data: data || [],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
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

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;