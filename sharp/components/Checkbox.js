import styled, { css } from '@emotion/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Paragraph from './Paragraph';

export default function Checkbox({ children, onChange = (checked) => {} }) {
	const [checked, setChecked] = useState(false);
	return (
		<TouchableOpacity
			style={{ display: 'flex', flexDirection: 'row' }}
			onPress={() => {
				onChange(!checked);
				setChecked(!checked);
			}}
		>
			<View
				style={css`
					width: 20px;
					height: 20px;
					background-color: ${checked ? '#000' : '#fff'};
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
