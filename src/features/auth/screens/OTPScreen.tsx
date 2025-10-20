import React, { useMemo, useRef, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';

const OTP_LENGTH = 4;

export default function OTPVerify() {
	const navigation = useNavigation();
	const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
	const inputs = useRef<Array<TextInput | null>>([]);

	const code = useMemo(() => otp.join(''), [otp]);
	const isComplete = code.length === OTP_LENGTH;

	const handleChange = (text: string, index: number) => {
		// Allow pasting an entire code
		if (text.length > 1) {
			const chars = text.replace(/\D/g, '').slice(0, OTP_LENGTH).split('');
			const next = [...otp];

			for (let i = 0; i < chars.length && index + i < OTP_LENGTH; i++) {
				next[index + i] = chars[i];
			}

			setOtp(next);
			const focusIndex = Math.min(index + chars.length - 1, OTP_LENGTH - 1);
			inputs.current[focusIndex]?.focus();
			return;
		}

		const next = [...otp];
		next[index] = text.replace(/\D/g, '').slice(-1);
		setOtp(next);

		if (text && index < OTP_LENGTH - 1) {
			inputs.current[index + 1]?.focus();
		}
	};

	const handleKeyPress = (e: any, index: number) => {
		if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
			inputs.current[index - 1]?.focus();
		}
	};

	const submit = () => {
		Keyboard.dismiss();
		// TODO: verify OTP code with backend
		console.log('Submitting OTP:', code);
	};

	const resend = () => {
		console.log('Resend code');
		// TODO: trigger resend request
	};

	return (
		<SafeAreaView style={styles.safe}>
			<LinearGradient
				colors={['#DDF1FF', '#FFFFFF']}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				style={styles.header}
			>
				<Pressable
					accessibilityRole='button'
					onPress={() => navigation?.goBack?.()}
					style={styles.backBtn}
				>
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
					{Array.from({ length: OTP_LENGTH }).map((_, i) => (
						<TextInput
							key={i}
							ref={(el) => {
								inputs.current[i] = el;
							}}
							value={otp[i]}
							onChangeText={(t) => handleChange(t, i)}
							onKeyPress={(e) => handleKeyPress(e, i)}
							keyboardType='number-pad'
							textContentType='oneTimeCode'
							maxLength={OTP_LENGTH}
							autoCapitalize='none'
							autoCorrect={false}
							returnKeyType='next'
							style={[styles.otpBox, otp[i] ? styles.otpBoxFilled : null]}
						/>
					))}
				</View>

				<CustomText style={styles.resendText}>
					Didn’t receive your code?
					<CustomText
						style={styles.resendLink}
						onPress={resend}
					>
						{' '}
						Resend
					</CustomText>
				</CustomText>
			</View>

			<View style={styles.footer}>
				<Pressable
					onPress={submit}
					disabled={!isComplete}
					style={({ pressed }) => [
						styles.submitBtn,
						(!isComplete || pressed) && { opacity: 0.8 },
					]}
				>
					<Text style={styles.submitLabel}>Submit</Text>
				</Pressable>
			</View>
		</SafeAreaView>
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
	otpBoxFilled: {
		borderColor: '#F59E0B',
		backgroundColor: '#FFFBEB',
		color: '#111827',
	},

	resendText: {
		marginTop: 20,
		fontSize: 13.5,
		color: '#111827',
	},
	resendLink: {
		color: '#F59E0B',
		// fontWeight: '600',
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
