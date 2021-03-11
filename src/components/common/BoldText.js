import React from 'react';
import {Text} from 'react-native';
import {NormalText} from './NormalText';

const BoldText = ({text}) => (
  <NormalText
    text={text}
    style={{
      fontWeight: 'bold',
    }}
  />
);

export {BoldText};
