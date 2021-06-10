import styled from 'styled-components/native';
import React from 'react';

// TODO: Fix infinite scroll bug
const ScrollView = styled.ScrollView`
	overflow: visible;
`;

interface props {
	children: any;
}

export default function CardCarousel({ children }: props) {
	return <ScrollView horizontal>{children}</ScrollView>;
}
