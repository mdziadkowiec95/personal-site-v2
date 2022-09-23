import React from 'react';
import PropTypes from 'prop-types';
import { SiteLogo } from '../SiteLogo';
import { NavItem, NavLink, NavList, NavLogo, NavWrap } from './styles';

const links = [
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'About me',
    id: 'about-me',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

const getRelativeUrlFromLink = link => link.id ? `#${link.id}` : `/${link.path}`;

const NavMenu = ({ isOpen, isInitialized, setIsOpen }) => {
  return (
    <NavWrap isOpen={isOpen} isInitialized={isInitialized}>
      <NavLogo isOpen={isOpen}>
        <SiteLogo />
      </NavLogo>
      <NavList isOpen={isOpen}>
        {links.map(link => (
          <NavItem key={`section-${link.name}`}>
            <NavLink href={getRelativeUrlFromLink(link)} onClick={() => setIsOpen(false)}>
              {link.name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrap>
  );
};

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  isInitialized: PropTypes.bool,
};

NavMenu.defaultProps = {
  isOpen: false,
  isInitialized: false,
};

export { NavMenu };