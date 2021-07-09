import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Components/Home/Home';
import { AboutUs } from '../Components/AboutUs/AboutUs';


const AboutUsStack = createStackNavigator();

export const AboutUsNavigator = () => {
  
  return (
    <AboutUsStack.Navigator initialRouteName="Home" headerMode="none">
      <AboutUsStack.Screen name="AboutUs" component={AboutUs} />
    </AboutUsStack.Navigator>
  );
};