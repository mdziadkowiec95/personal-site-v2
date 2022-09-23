import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { Hamburger } from '../Hamburger';
import { NavMenu } from '../NavMenu';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [scrollDirection, pageYOffset] = useScrollDirection('up');

  const handleNavOpen = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (!isInitialized) setIsInitialized(true);
  };

  const hasBackgroundCondition  = pageYOffset > 200000;
  
  return (
    <Wrapper isFixed={false} hasBackground={hasBackgroundCondition}>
        <Hamburger onClick={handleNavOpen} />
        <NavMenu
          isOpen={isOpen}
          isInitialized={isInitialized}
          setIsOpen={setIsOpen}
          hasBackground={hasBackgroundCondition}
        />
    </Wrapper>
  );
};

export { Header };