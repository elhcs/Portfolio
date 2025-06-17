import React, { useState } from 'react';
import Timeline from '../components/vedecom_internship_TL';
import './Rebrand.css';

const Rebrand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <Timeline />
  </div>
  );
};

export default Rebrand;