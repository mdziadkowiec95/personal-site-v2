import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { LogoImg, LogoLink } from './styles';

const SiteLogo = ({ withBg }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "site-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = data;

  return (
    <LogoLink to="/">
      <LogoImg withBg={withBg} fluid={fluid}></LogoImg>
    </LogoLink>
  );
};

SiteLogo.propTypes = {
  withBg: PropTypes.bool,
};

SiteLogo.defaultProps = {
  withBg: false,
};

export { SiteLogo };