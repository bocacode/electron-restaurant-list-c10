import { useNavigate } from 'react-router-dom';
import './rest-card.css';

export default function RestDetails() {

  const navigate = useNavigate()

  return (
    <div className="rest-card" onClick={() => navigate('/')}>
      <h2>Details Page</h2>
    </div>
  );
}
