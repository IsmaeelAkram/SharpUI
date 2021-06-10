import React from 'react';
import { TextInput } from 'react-native';

interface props {
	placeholder: string;
	password?: boolean;
	raw?: boolean;
	type?: string;
}

export default function ({ placeholder, password, raw, type }: props) {
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor="#474747"
			secureTextEntry={password}
			autoCapitalize={raw ? 'none' : 'sentences'}
			autoCorrect={raw ? false : true}
			autoCompleteType={type || "none"}
			style={{
				marginTop: 5,
				fontFamily: 'PlusJakartaSansMedium',
				fontSize: 16,
				backgroundColor: '#ededed',
				padding: 10,
				borderRadius: 7,
			}}
		></TextInput>
	);
}
