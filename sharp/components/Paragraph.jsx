// import styled from 'styled-components/native';
// import React from 'react';

// export default styled.Text`
// 	font-size: 15px;
// 	font-family: 'PlusJakartaSansRegular';
// `;

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
			style={{
				color: Appearance.getColorScheme() == 'dark' ? '#fff' : '#000',
				fontFamily: font,
				fontSize: size,
			}}
		>
			{children}
		</Text>
	);
}
