import styled, { css } from '@emotion/native';
import React from 'react';
import { Appearance } from 'react-native';

export default styled.Text`
	color: ${Appearance.getColorScheme() == 'dark' ? '#fff' : '#000'};
	font-size: 40px;
	font-family: 'PlusJakartaSansBold';
`;
