import styled, { css } from '@emotion/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, useColorScheme } from 'react-native';
import Paragraph from './Paragraph';

export default function Checkbox({ children, onChange = (checked) => {} }) {
	const [checked, setChecked] = useState(false);
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<TouchableOpacity
			style={css`
				display: flex;
				flex-direction: row;
			`}
			onPress={() => {
				onChange(!checked);
				setChecked(!checked);
			}}
		>
			<View
				style={css`
					width: 20px;
					height: 20px;
<<<<<<< HEAD
					background-color: ${dark ? (checked ? '#fff' : '#131313') : checked ? '#000' : '#fff'};
=======
					background-color: ${
						colorScheme == 'dark' ? (checked ? '#fff' : '#000') : checked ? '#000' : '#fff'
					};
					border-color: ${colorScheme == 'dark' ? '#fff' : '#000'};
>>>>>>> 9d8831066499872a1ba36c192e6d97cacb2b681c
					border-width: 2px;
					border-radius: 5px;
					border-color: ${dark ? '#fff' : '#000'};
					margin-right: 5px;
				`}
			></View>
			<Paragraph size={15} bold>
				{children}
			</Paragraph>
		</TouchableOpacity>
	);
}
