import { useEffect } from 'react';

// React router
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
