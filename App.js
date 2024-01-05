import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/Views/HomeScreen'
import CharacterDetailScreen from './src/Views/CharacterDetailScreen'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen
					name='CharacterDetail'
					component={CharacterDetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
