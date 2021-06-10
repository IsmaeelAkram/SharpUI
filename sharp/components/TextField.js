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
			style={{
				marginTop: 5,
				fontFamily: 'PlusJakartaSansMedium',
				fontSize: 16,
				backgroundColor: Appearance.getColorScheme() == 'dark' ? '#373737' : '#ededed',
				padding: 10,
				borderRadius: 7,
			}}
		></TextInput>
	);
}
