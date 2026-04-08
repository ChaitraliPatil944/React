import { useEffect, useState } from 'react';

function Flowers() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/flowers')
      .then(response => response.json())
      .then(result => {
        setFlowers(result.data);
      })
      .catch(error => {
        console.error('Error fetching flowers:', error);
      });
  }, []);

  return (
    <div>
      {flowers.map(flower => (
        <div key={flower.id}>
          <h3>{flower.name}</h3>
          <p>Color: {flower.color}</p>
          <p>Price: {flower.price}</p>
          <img src={flower.imageurl} alt={flower.name} width="120" />
        </div>
      ))}
    </div>
  );
}

export default Flowers;