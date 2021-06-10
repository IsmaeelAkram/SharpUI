import styled from '@emotion/native';
import { Appearance } from 'react-native';

export default styled.Text`
	color: ${Appearance.getColorScheme() == 'dark' ? '#fff' : '#000'};
	font-size: 25px;
	font-family: 'PlusJakartaSansMedium';
	margin-bottom: 5px;
`;
