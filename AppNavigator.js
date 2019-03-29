import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./Screens/Home/HomeScreen";
import ArticleScreen from "./Screens/Article/ArticleScreen";

const NavStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Article: { screen: ArticleScreen }
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;