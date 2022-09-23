import React from 'react';
import { HeadingName, HeadingRole, HeadingWrap, PurpleAccent, SkillsBtn, Wrapper } from './styles';

const HeroBox = () => {
  return (
    <Wrapper>
      <HeadingWrap>
        <HeadingName>Hi, I&apos;m Michał.</HeadingName>
        <br />
        <HeadingRole>
          <PurpleAccent>Front-end</PurpleAccent> Developer
        </HeadingRole>
      </HeadingWrap>
      <SkillsBtn as="a" href="#skills">
        Get to know me
      </SkillsBtn>
    </Wrapper>
  );
};

export { HeroBox };