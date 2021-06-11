import styled, { css } from '@emotion/native';
import { useColorScheme, Text } from 'react-native';
import React from 'react';

export default function Title(props) {
	let colorScheme = useColorScheme();
	return (
		<Text
			style={css`
				color: ${colorScheme == 'dark' ? '#fff' : '#131313'};
				font-size: 40px;
				font-family: 'PlusJakartaSansBold';
				margin-bottom: 5px;
			`}
			{...props}
		>
			{props.children}
		</Text>
	);
}
