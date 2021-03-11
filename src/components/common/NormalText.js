import React from 'react';
import {Text} from 'react-native';

const NormalText = ({text, style}) => (
  <Text style={[{fontSize: 20}, style]}>{text}</Text>
);

export {NormalText};
