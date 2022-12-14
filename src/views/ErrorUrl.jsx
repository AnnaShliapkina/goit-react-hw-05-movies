import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorUrl = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <h3>Navigate to Homepage</h3>;
};

export default ErrorUrl;
