import styled, { css } from '@emotion/native';
import React, { useState } from 'react';
import { View, TouchableOpacity, useColorScheme } from 'react-native';
import Paragraph from './Paragraph';

export default function Checkbox({ children, onChange = (checked) => {} }) {
	const [checked, setChecked] = useState(false);
	let colorScheme = useColorScheme()
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
					background-color: ${colorScheme == "dark" ? checked ? '#131313' : '#fff' : checked ? '#131313': '#fff'};
					border-color: ${colorScheme == "dark" ? "#fff" : '#131313'};
					border-width: 2px;
					border-radius: 5px;
					margin-right: 5px;
				`}
			></View>
			<Paragraph size={15} bold>
				{children}
			</Paragraph>
		</TouchableOpacity>
	);
}
