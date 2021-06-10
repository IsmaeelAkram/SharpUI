import styled from '@emotion/native';
import React from 'react';

const ScrollView = styled.ScrollView`
	overflow: visible;
`;

export default function CardCarousel({ children }) {
	return <ScrollView horizontal>{children}</ScrollView>;
}
