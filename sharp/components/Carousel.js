import styled, { css } from '@emotion/native';
import React from 'react';
import { ScrollView } from 'react-native';

export default function CardCarousel({ children }) {
	return (
		<ScrollView
			style={css`
				overflow: visible;
			`}
			horizontal
		>
			{children}
		</ScrollView>
	);
}
