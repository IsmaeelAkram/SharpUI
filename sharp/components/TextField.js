import styled, { css } from '@emotion/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { TextInput } from 'react-native';
import { Appearance } from 'react-native';

export default function ({ placeholder, password, raw, type }) {
	let colorScheme = useColorScheme();
	let dark = colorScheme == 'dark';
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor={dark ? '#9d9d9d' : '#373737'}
			secureTextEntry={password}
			autoCapitalize={raw ? 'none' : 'sentences'}
			autoCorrect={raw ? false : true}
			autoCompleteType={type || 'none'}
			style={css`
				margin-top: 5px;
				font-family: 'PlusJakartaSansMedium';
				font-size: 16px;

				background-color: ${dark ? '#373737' : '#ededed'};
				padding: 10px;
				border-radius: 7px;
			`}
		></TextInput>
	);
}
