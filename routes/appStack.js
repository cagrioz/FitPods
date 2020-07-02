import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IntroScreen from '../screens/intro';
import TestScreen from '../screens/test';

const screens = {
    Intro: {
        screen: IntroScreen,
        navigationOptions: {
            title: '',
            headerStyle: { height: 0 }
        }
    },
    Test: {
        screen: TestScreen,
        navigationOptions: {
            title: 'Test The Fitting Now!',
            //headerStyle: { backgroundColor: '#ddd' }
        }
    }
}

const TestStack = createStackNavigator(screens);

export default createAppContainer(TestStack);
