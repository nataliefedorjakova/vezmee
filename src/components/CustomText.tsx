import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { useColorScheme } from 'react-native';

interface CustomTextProps extends TextProps {
	weight?: 'regular' | 'medium' | 'bold';
}

export const CustomText: React.FC<CustomTextProps> = ({
	weight = 'regular',
	style,
	children,
	...props
}) => {
	const theme = useColorScheme() ?? 'light';

	return (
		<Text
			{...props}
			style={[
				styles.text,
				{
					fontFamily: fonts.family[weight],
					color: colors[theme].text,
				},
				style,
			]}
		>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: fonts.size.md,
	},
});

export default CustomText;
