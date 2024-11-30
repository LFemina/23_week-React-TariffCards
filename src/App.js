import React, { useState } from 'react';
import Tariff from './components/Tariff';
import './App.css';

const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/сек', traffic: 'Объём включённого трафика не ограничен', color: '#a7d6da' },
    { title: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/сек', traffic: 'Объём включённого трафика не ограничен', color: '#4bd09b' },
    { title: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/сек', traffic: 'Объём включённого трафика не ограничен', color: '#fa9a8a' },
    { title: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/сек', traffic: 'Объём включённого трафика не ограничен', color: '#332f2d' },
  ];

  const handleTariffSelect = (title) => {
    setSelectedTariff(title);
  };

  return (
    <div className="tariffs-container">
      {tariffs.map(tariff => (
        <Tariff
          key={tariff.title}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          traffic={tariff.traffic}
          highlight={selectedTariff === tariff.title}
          color={tariff.color}
          onClick={handleTariffSelect}
        />
      ))}
    </div>
  );
}

export default App;
