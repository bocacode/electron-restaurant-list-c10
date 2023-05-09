import { useNavigate } from 'react-router-dom';
import './rest-card.css';

export default function RestCard({ rest }: any) {

  const navigate = useNavigate()

  return (
    <div className="rest-card" onClick={() => navigate('/details')}>
      <img src={rest.image} alt="" />
      <h2>{rest.name}</h2>
    </div>
  );
}
