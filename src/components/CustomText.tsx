import React from 'react';
import { Text } from 'react-native';

const CustomText = (props: React.ComponentProps<typeof Text>) => (
	<Text
		{...props}
		style={[{ fontFamily: 'Poppins_400Regular' }, props.style]}
	/>
);

export default CustomText;
