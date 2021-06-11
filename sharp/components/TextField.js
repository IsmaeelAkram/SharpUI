import styled, { css } from '@emotion/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { TextInput } from 'react-native';
import { Appearance } from 'react-native';

export default function ({ placeholder, password, raw, type }) {
	let colorScheme = useColorScheme();
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor={Appearance.getColorScheme() == 'dark' ? '#fff' : '#474747'}
			secureTextEntry={password}
			autoCapitalize={raw ? 'none' : 'sentences'}
			autoCorrect={raw ? false : true}
			autoCompleteType={type || 'none'}
			style={css`
				margin-top: 5px;
				font-family: 'PlusJakartaSansMedium';
				font-size: 16px;
				background-color: ${colorScheme == 'dark' ? '#373737' : '#ededed'};
				padding: 10px;
				border-radius: 7px;
			`}
		></TextInput>
	);
}
