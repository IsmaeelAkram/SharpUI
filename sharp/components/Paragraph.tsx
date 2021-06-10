// import styled from 'styled-components/native';
// import React from 'react';

// export default styled.Text`
// 	font-size: 15px;
// 	font-family: 'PlusJakartaSansRegular';
// `;

import React from 'react';
import { Text } from 'react-native';

interface props {
	children: any;
	bold?: boolean;
	italic?: boolean;
	size?: number;
}

export default function ({ children, bold, italic, size }: props) {
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
				fontFamily: font,
				fontSize: size,
			}}
		>
			{children}
		</Text>
	);
}
