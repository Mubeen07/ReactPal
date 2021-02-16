import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  HomeScreen
} from "../screens";
import SplashScreen from "../screens/SplashScreen";

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: "Splash",
    mode: "modal",
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
