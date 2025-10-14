import React, { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
	TextInput,
	View,
	KeyboardAvoidingView,
	Keyboard,
	Alert,
	Pressable,
	TouchableWithoutFeedback,
	Image,
} from 'react-native';
import CustomText from '@/components/CustomText';
import { globalStyles } from '@/styles/globalStyles';
import { colors } from '@/styles/colors';

export default function RegistrationScreen({ navigation }: any) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const firstNameRef = useRef<TextInput>(null);
	const lastNameRef = useRef<TextInput>(null);
	const emailRef = useRef<TextInput>(null);
	const passwordRef = useRef<TextInput>(null);

	//TODO: Add invalid input style

	const handleSubmit = () => {
		Keyboard.dismiss();
		Alert.alert('Registration', 'Mock registration successful!');
		navigation.navigate('Home');
	};
	// TODO: smoother keyboard dismissal

	return (
		<LinearGradient
			colors={
				[...colors.light.backgroundGradient] as [string, string, ...string[]]
			}
			style={{ flex: 1 }}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView
					behavior='padding'
					style={{ flex: 1 }}
				>
					<View style={globalStyles.container}>
						<View style={globalStyles.logoContainer}>
							<CustomText style={globalStyles.logo}>vezmee</CustomText>
						</View>
						<View>
							<CustomText style={globalStyles.header}>
								Welcome to{' '}
								<CustomText style={globalStyles.logo}>vezmee</CustomText>
							</CustomText>
						</View>
						<View>
							<CustomText style={globalStyles.subheader}>
								Sign up or login below to manage your profile.
							</CustomText>
						</View>

						<View style={globalStyles.loginForm}>
							<View style={globalStyles.nameContainer}>
								<TextInput
									ref={firstNameRef}
									style={globalStyles.formInput}
									accessibilityLabel='First name'
									onChangeText={setFirstName}
									value={firstName}
									returnKeyType='next'
									autoCapitalize='words'
									autoComplete='name-given'
									textContentType='givenName'
									onSubmitEditing={() => lastNameRef.current?.focus()}
									placeholder='First name'
								/>
								<TextInput
									ref={lastNameRef}
									style={globalStyles.formInput}
									accessibilityLabel='Last name'
									onChangeText={setLastName}
									value={lastName}
									returnKeyType='next'
									autoCapitalize='words'
									autoComplete='name-family'
									textContentType='familyName'
									onSubmitEditing={() => emailRef.current?.focus()}
									placeholder='Last name'
								/>
							</View>

							<View>
								<TextInput
									ref={emailRef}
									style={globalStyles.formInput}
									accessibilityLabel='Email'
									onChangeText={setEmail}
									value={email}
									placeholder='Email'
									keyboardType='email-address'
									autoCapitalize='none'
									returnKeyType='next'
									onSubmitEditing={() => passwordRef.current?.focus()}
								/>
							</View>
							<View>
								<TextInput
									ref={passwordRef}
									style={globalStyles.formInput}
									accessibilityLabel='Password'
									onChangeText={setPassword}
									value={password}
									returnKeyType='next'
									autoComplete='new-password'
									textContentType='newPassword' // FIXME: input acting like an old pw
									autoCorrect={false}
									autoCapitalize='none'
									onSubmitEditing={handleSubmit} //TODO: submit logic
									secureTextEntry={true}
									placeholder='Password'
									// TODO: add show password option
								/>
							</View>
						</View>
						<Pressable
							style={globalStyles.signUpButton}
							onPress={handleSubmit}
						>
							<CustomText style={globalStyles.signUpButtonText}>
								Sign Up
							</CustomText>
						</Pressable>
						{/* TODO: check empty fields or incorrect input on submit */}
						<CustomText>Already have an account? Sign in now</CustomText>
						{/* TODO: make this a pressable link */}
						<View>
							<CustomText>Or</CustomText>
						</View>
						<View>
							<View>
								<Pressable style={globalStyles.SSObutton}>
									<Image
										source={require('../../../../assets/google-logo.png')}
										style={{ width: 20, height: 20 }}
									/>
									<CustomText>Google</CustomText>
								</Pressable>
							</View>
							<View>
								<Pressable style={globalStyles.SSObutton}>
									<Image
										source={require('../../../../assets/apple-logo.png')}
										style={{ width: 20, height: 20 }}
									/>
									<CustomText>Apple</CustomText>
								</Pressable>
							</View>
						</View>
						<View style={globalStyles.footer}>
							<CustomText style={{ alignItems: 'center', marginTop: 'auto' }}>
								By signing up, you agree to our{' '}
								<CustomText style={globalStyles.link}>
									Terms and Conditions
								</CustomText>
								.
							</CustomText>
							{/* TODO: make this a pressable link */}
							<CustomText>
								Learn how we use your data in our{' '}
								<CustomText style={globalStyles.link}>
									Privacy Policy
								</CustomText>
								.
							</CustomText>
							{/* TODO: make this a pressable link */}
						</View>
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</LinearGradient>
	);
}
