// OTPVerifyUI.tsx
import React, { useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '@/components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/styles/colors';

export default function OTPVerify() {
	const inputs = useRef<Array<TextInput | null>>([]);

	const handleChange = (text: string, index: number) => {
		if (text) {
			if (index < inputs.current.length - 1) {
				inputs.current[index + 1]?.focus();
			} else {
				Keyboard.dismiss();
			}
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={styles.safe}>
				<LinearGradient
					colors={
						[...colors.light.backgroundGradient] as [
							string,
							string,
							...string[],
						]
					}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					style={styles.header}
				>
					<Pressable style={styles.backBtn}>
						<Ionicons
							name='chevron-back'
							size={22}
							color='#111827'
						/>
					</Pressable>

					<CustomText style={styles.title}>Enter OTP Code</CustomText>
					<CustomText style={styles.subtitle}>
						OTP code has been sent to your email address.
					</CustomText>
				</LinearGradient>

				<View style={styles.content}>
					<View style={styles.otpRow}>
						{Array.from({ length: 4 }).map((_, i) => (
							<TextInput
								key={i}
								ref={(el: TextInput | null) => {
									inputs.current[i] = el;
								}}
								style={styles.otpBox}
								keyboardType='number-pad'
								maxLength={1}
								onChangeText={(text) => handleChange(text, i)}
								textAlign='center'
							/>
						))}
					</View>

					<Text style={styles.resendText}>
						Didn’t receive your code?
						<Text style={styles.resendLink}> Resend</Text>
					</Text>
				</View>

				<View style={styles.footer}>
					<Pressable style={styles.submitBtn}>
						<CustomText style={styles.submitLabel}>Submit</CustomText>
					</Pressable>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: '#fff' },

	header: {
		paddingHorizontal: 20,
		paddingBottom: 24,
		paddingTop: 8,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	backBtn: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: '#F2F2F2',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 4,
	},
	title: {
		marginTop: 12,
		fontSize: 26,
		fontWeight: '700',
		color: '#111827',
	},
	subtitle: {
		marginTop: 6,
		fontSize: 13.5,
		color: '#6B7280',
	},

	content: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 28,
	},
	otpRow: {
		flexDirection: 'row',
		gap: 16,
	},
	otpBox: {
		width: 64,
		height: 64,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#E5E7EB',
		backgroundColor: '#fff',
		textAlign: 'center',
		fontSize: 24,
		fontWeight: '600',
		color: '#111827',
	},

	resendText: {
		marginTop: 20,
		fontSize: 13.5,
		color: '#111827',
	},
	resendLink: {
		color: '#F59E0B',
		fontWeight: '600',
	},

	footer: {
		paddingHorizontal: 20,
		paddingVertical: 16,
	},
	submitBtn: {
		height: 56,
		borderRadius: 23,
		backgroundColor: '#F59E0B',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#F59E0B',
		shadowOpacity: 0.25,
		shadowRadius: 8,
		elevation: 2,
	},
	submitLabel: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '700',
	},
});
