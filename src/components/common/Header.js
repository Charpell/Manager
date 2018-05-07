import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewsStyle } = styles;

  return (
    <View style={viewsStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>    
  )
}

const styles = {
  viewsStyle: {
    backgroundColor: '#F8F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export { Header };
