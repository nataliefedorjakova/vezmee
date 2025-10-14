import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import RegistrationScreen from '../features/auth/screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

const CustomText = (props: React.ComponentProps<typeof Text>) => (
	<Text
		{...props}
		style={[{ fontFamily: 'Poppins_400Regular' }, props.style]}
	/>
);

function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<CustomText>Open up.</CustomText>
			<Button
				title='Go to Registration'
				onPress={() => navigation.navigate('Register')}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

export default function App(): React.JSX.Element {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	// if (!fontsLoaded) {
	// 	return <AppLoading />;
	// }

	return (
		<NavigationContainer>
			<Stack.Navigator id={undefined}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Register'
					component={RegistrationScreen}
					options={{
						headerTransparent: true,
						headerTitle: '',
						headerBackTitle: '',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
