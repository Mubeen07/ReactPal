import React, { useEffect } from "react";
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

const HomeScreen = ({ navigation }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
        }}
      >
      </View>
    );
  }

export {HomeScreen};
