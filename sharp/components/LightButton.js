import React from 'react';
import styled, { css } from '@emotion/native';
import { TouchableOpacity, Text, useColorScheme } from 'react-native';

export default function ({ children, width, onPress }) {
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<TouchableOpacity
			style={css`
				background-color: ${dark ? '#fff' : '#ededed'};
				padding: 7px 10px 7px 10px;
				width: ${width};
				height: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 7px;
				margin-right: 10px;
			`}
			onPress={onPress}
		>
			<Text
				style={css`
					font-family: 'PlusJakartaSansMedium';
					font-size: 17px;
					color: black;
				`}
			>
				{children}
			</Text>
		</TouchableOpacity>
	);
}