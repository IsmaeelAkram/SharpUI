import { useColorScheme, View } from 'react-native';
import React from 'react';

export default function DarkView({ children }) {
	let colorScheme = useColorScheme();
	return (
		<View style={{ backgroundColor: colorScheme == 'dark' ? '#131313' : '#fff' }}>{children}</View>
	);
}
