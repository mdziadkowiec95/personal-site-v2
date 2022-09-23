import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrap } from './styles';

const Container = ({ id, children }) => {
  return <ContainerWrap id={id}>{children}</ContainerWrap>;
};

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  id: null,
};

export { Container };