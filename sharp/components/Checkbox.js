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
				style={{
					width: 20,
					height: 20,
					borderColor: '#000',
					backgroundColor: checked ? '#000' : '#fff',
					borderWidth: 2,
					borderRadius: 5,
					marginRight: 5,
				}}
			></View>
			<Paragraph size={15} bold>
				{children}
			</Paragraph>
		</TouchableOpacity>
	);
}
