import styled, { css } from '@emotion/native';
import { useColorScheme, Text } from 'react-native';
import React from 'react';

export default function Subtitle(props) {
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<Text
			{...props}
			style={css`
				color: ${dark ? '#fff' : '#000'};
				font-size: 25px;
				font-family: 'PlusJakartaSansMedium';
				margin-bottom: 5px;

				${props.style}
			`}
		>
			{props.children}
		</Text>
	);
}
