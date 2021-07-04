import styled, { css } from '@emotion/native';
import { useColorScheme, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function ThemeView({ children }) {
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<>
			<StatusBar style={dark ? 'light' : 'dark'} />
			<View
				style={css`
					background-color: ${dark ? '#131313' : '#fff'};
				`}
			>
				{children}
			</View>
		</>
	);
}
