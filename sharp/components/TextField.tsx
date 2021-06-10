import React from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import styled, { css } from 'styled-components';

interface props {
	placeholder: string;
	password?: boolean;
	raw?: boolean;
}

export default function ({ placeholder, password, raw }: props) {
	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor="#474747"
			secureTextEntry={password}
			autoCapitalize={raw ? 'none' : 'sentences'}
			autoCorrect={raw ? false : true}
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
