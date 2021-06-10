import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface props {
	children: any;
	dark?: boolean;
	width?: number;
	onPress?: () => void;
}

export default function ({ children, dark, width, onPress }: props) {
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
