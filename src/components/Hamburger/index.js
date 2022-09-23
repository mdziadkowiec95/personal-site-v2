import React from 'react';
import PropTypes from 'prop-types';
import { BurgerButton, BurgerLines } from './styles';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <BurgerButton onClick={onClick} isOpen={isOpen} href="#">
      <BurgerLines />
    </BurgerButton>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

Hamburger.defaultProps = {
  isOpen: false,
  onClick: null,
};

export { Hamburger };