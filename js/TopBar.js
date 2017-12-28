import React from "react";
import {
  Hero,
  HeroHeader,
  Nav,
  NavLeft,
  NavRight,
  HeroBody
} from 'Bloomer'

const TopBar = () => (<Hero>
  <HeroHeader>
    <Nav>
      <HeaderName></HeaderName>
      <ThemeSelector></ThemeSelector>
      <Shuffler></Shuffler>
    </Nav>
  </HeroHeader>

</Hero>);
