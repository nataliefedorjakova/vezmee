import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		padding: 24,
	},

	logoContainer: {
		alignItems: 'center',
		marginBottom: 20,
	},

	logo: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#F6951F',
	},

	header: {
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 6,
	},

	subheader: {
		textAlign: 'center',
		color: '#161F1C',
		marginBottom: 24,
	},

	loginForm: {
		gap: 8,
		alignSelf: 'stretch',
	},

	nameContainer: {
		flexDirection: 'row',
		width: '100%',
		gap: 8,
	},

	formInput: {
		flex: 1,
		height: 48,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 23,
		paddingVertical: 16,
		paddingHorizontal: 20,
		marginBottom: 8,
		fontSize: 16,
	},

	signUpButton: {
		marginTop: 16,
		backgroundColor: '#F6951F',
		borderRadius: 23,
		paddingVertical: 14,
		alignItems: 'center',
		alignSelf: 'stretch',
	},

	signUpButtonText: {
		color: 'white',
		fontSize: 16,
	},

	SSObutton: {
		flexDirection: 'row',
		marginTop: 16,
		borderRadius: 23,
		borderColor: '#EEEEEE',
		backgroundColor: '#F4F4F4',
		borderWidth: 1,
		paddingVertical: 20,
		gap: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		flexDirection: 'column',
		// marginTop: 'auto',
		// alignItems: 'center',
		// paddingVertical: 16,
	},
	link: { fontWeight: 'bold' },
});
