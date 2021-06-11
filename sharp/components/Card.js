import styled, { css } from '@emotion/native';
import { useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';

export default function Card(props) {
	let colorScheme = useColorScheme();
	return (
		<TouchableOpacity
			style={css`
				background-color: ${colorScheme == 'dark' ? '#131313' : '#fff'};
				border-radius: 10px;
				padding: 15px;
				shadow-color: #000;
				shadow-opacity: 0.075;
				shadow-radius: 10px;
				max-width: 100%;
				margin-right: 20px;
			`}
		>
			{props.children}
		</TouchableOpacity>
	);
}
