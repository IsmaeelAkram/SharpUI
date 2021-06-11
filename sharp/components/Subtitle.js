import styled, { css } from '@emotion/native';
import { useColorScheme, Text } from 'react-native';
import React from 'react';

export default function Subtitle(props) {
	let colorScheme = useColorScheme();
	return (
		<Text
			{...props}
			style={css`
				color: ${colorScheme == 'dark' ? '#fff' : '#131313'};
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
