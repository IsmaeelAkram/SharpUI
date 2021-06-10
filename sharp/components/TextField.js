import styled, { css } from '@emotion/native';
import React from 'react';
import { TextInput } from 'react-native';
import { Appearance } from 'react-native';

export default function ({ placeholder, password, raw, type }) {
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
				background-color: ${Appearance.getColorScheme() == 'dark' ? '#373737' : '#ededed'};
				padding: 10px;
				border-radius: 7px;
			`}
		></TextInput>
	);
}
