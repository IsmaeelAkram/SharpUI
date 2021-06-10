import styled from 'styled-components/native';
import { Appearance } from 'react-native';

const Card = styled.TouchableOpacity`
	background-color: ${Appearance.getColorScheme() == 'dark' ? '#131313' : '#fff'};
	border-radius: 10px;
	padding: 15px;
	shadow-color: #000;
	shadow-opacity: 0.075;
	shadow-radius: 10px;
	max-width: 100%;
	${(props) => (props.carousel ? 'margin-right: 20px' : '')}
`;
export default Card;
