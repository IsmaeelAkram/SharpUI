import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function ({ children, dark, width, onPress }) {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: dark ? 'black' : '#ededed',
				padding: 5,
				width: width,
				height: 35,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 7,
				marginRight: 10,
			}}
			onPress={onPress}
		>
			<Text
				style={{
					fontFamily: 'PlusJakartaSansMedium',
					fontSize: 17,
					color: dark ? 'white' : 'black',
				}}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
}
