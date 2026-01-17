import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
  <div className="loader-overlay">
    <div className="loader-spinner"></div>
  </div>
);

export default Loader;
