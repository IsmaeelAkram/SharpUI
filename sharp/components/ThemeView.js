import styled, { css } from '@emotion/native';
import { useColorScheme, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function ThemeView({ children }) {
	let colorScheme = useColorScheme();
	return (
		<>
			<StatusBar style={colorScheme == 'dark' ? 'light' : 'dark'} />
			<View
				style={css`
					background-color: ${colorScheme == 'dark' ? '#000000' : '#fff'};
				`}
			>
				{children}
			</View>
		</>
	);
}
