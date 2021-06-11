import styled, { css } from '@emotion/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Text } from 'react-native';

export default function ({ children, bold, italic, size }) {
	let colorScheme = useColorScheme();
	let font = 'PlusJakartaSansRegular';
	if (bold && !italic) {
		font = 'PlusJakartaSansBold';
	} else if (!bold && italic) {
		font = 'PlusJakartaSansItalic';
	} else if (bold && italic) {
		font = 'PlusJakartaSansBoldItalic';
	}

	return (
		<Text
			style={css`
				color: ${colorScheme == 'dark' ? '#fff' : '#000'};
				font-family: ${font};
				font-size: ${size};
			`}
		>
			{children}
		</Text>
	);
}
