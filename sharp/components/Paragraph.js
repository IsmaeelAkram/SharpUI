import styled, { css } from '@emotion/native';
import React from 'react';
import { Text } from 'react-native';
import { Appearance } from 'react-native';

export default function ({ children, bold, italic, size }) {
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
				color: ${Appearance.getColorScheme() == 'dark' ? '#fff' : '#000'};
				font-family: ${font};
				font-size: ${size};
			`}
		>
			{children}
		</Text>
	);
}
