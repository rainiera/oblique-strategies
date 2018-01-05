import React from 'react';
import {Level, LevelLeft, LevelRight, LevelItem, Subtitle} from 'bloomer'

const TopBar = () => (<Level>
  <LevelLeft>
    <LevelItem>
      <Subtitle tag='p' isSize={2}>
        <strong>oblique strategies</strong>
      </Subtitle>
    </LevelItem>
  </LevelLeft>
  <LevelRight>
    <LevelItem>
      <i className="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>
      {'\u00A0'}
      {'\u00A0'}
      <i className="fa fa-square-o fa-2x" aria-hidden="true"></i>
      {'\u00A0'}
      {'\u00A0'}
      <i className="fa fa-font fa-2x" aria-hidden="true"></i>
      {'\u00A0'}
      {'\u00A0'}
      <i className="fa fa-random fa-2x" aria-hidden="true"></i>
    </LevelItem>
  </LevelRight>
</Level>);

export default TopBar;
