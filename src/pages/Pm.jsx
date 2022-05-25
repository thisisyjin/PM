import { useParams } from 'react-router-dom';

// /pm/:city

const Pm = () => {
  const { city } = useParams();
  console.log(city);
  return <div>Pm {city}</div>;
};

export default Pm;
