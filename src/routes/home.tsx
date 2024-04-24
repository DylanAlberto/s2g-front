import ChartComponent from '../ui/chart';
import Container from '../ui/container';

const Dashboard = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 30 },
    { x: 4, y: 40 },
    { x: 5, y: 50 },
  ];

  return (
    <div className="flex flex-col h-screen text-center">
      <header className="bg-primary p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      <Container>
        <ChartComponent data={data} />
      </Container>
      <footer className="bg-primary p-4">
        <p className="text-sm">Copyright 2023</p>
      </footer>
    </div>
  );
};

export default Dashboard;
