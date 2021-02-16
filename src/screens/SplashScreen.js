import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  stretch: {
    resizeMode: "cover",
    width: 240,
    height: 125,
    marginTop: 180,
  },
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

// Class Component
class Splash extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          //   paddingTop: 100,
        }}
      >
      </View>
    );
  }
}

export default Splash;
