import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '../../components/Container';
import {HeroBox} from '../../components/HeroBox';
// import SocialBar from '../../components/SocialBar/SocialBar';
import { PortraitImg, HeroInner, Wrapper} from './styles';
// import MouseIconSVG from '../../assets/images/icon-mouse.svg';


const useHeroPortraitImageSrc = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "hero-portrait-narrow-lq.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `);
    return data.placeholderImage.childImageSharp.fluid;
  };

const HeroTemplate = () => {

  const heroPortraitImageSrc = useHeroPortraitImageSrc();

  return (
    <Wrapper>
      <PortraitImg fluid={heroPortraitImageSrc} />
      <Container>
        <HeroInner>
          <HeroBox />
        </HeroInner>
        {/* <MouseIcon href="#about">
          <MouseIconSVG />
        </MouseIcon> */}
      </Container>
      {/* <SocialBar /> */}
    </Wrapper>
  );
};

export { HeroTemplate};