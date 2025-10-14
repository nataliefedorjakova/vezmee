import { moderateScale } from 'react-native-size-matters';

export const fonts = {
	family: {
		regular: 'Poppins_400Regular',
		medium: 'Poppins_500Medium',
		bold: 'Poppins_700Bold',
	},
	size: {
		xs: moderateScale(12),
		sm: moderateScale(14),
		md: moderateScale(16),
		lg: moderateScale(20),
		xl: moderateScale(24),
		xxl: moderateScale(32),
	},
	lineHeight: {
		sm: moderateScale(18),
		md: moderateScale(22),
		lg: moderateScale(28),
		xl: moderateScale(34),
	},
};
