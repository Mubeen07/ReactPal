import {NavigationActions, StackActions} from 'react-navigation';

let config;

const configNavigator = (nav) => {
  config = nav;
};

const resetNavigation = (routeName, params) => {
  const action = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
      }),
    ],
  });
  config.dispatch(action);
};

const navigate = (routeName, params) => {
  config.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

const goBack = () => {
  config.dispatch(NavigationActions.back());
};

export default {
  configNavigator,
  navigate,
  resetNavigation,
  goBack,
};
