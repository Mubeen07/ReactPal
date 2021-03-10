import React from 'react';
import {Text} from 'react-native';

const BoldText = ({text}) => (
  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{text}</Text>
);

export {BoldText};
