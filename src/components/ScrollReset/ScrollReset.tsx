import { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReset: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollReset;
