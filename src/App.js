import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Papel higiênco',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'TV nova', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Seguro do carro',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Escrivaninha nova (Madeira)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
