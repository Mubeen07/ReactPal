import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../../../resources/theme/colors';

const ItalicText = ({text, left}) => (
  <Text
    style={{
      fontSize: 14,
      fontStyle: 'italic',
      left: left,
      color: Colors.lightGray,
    }}>
    {text}
  </Text>
);

export {ItalicText};
