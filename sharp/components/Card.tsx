import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Card = styled.TouchableOpacity`
	background-color: #fff;
	border-radius: 10px;
	padding: 15px;
	shadow-color: #000;
	shadow-opacity: 0.075;
	shadow-radius: 10px;
	max-width: 100%;
	${(props) => (props.carousel ? 'margin-right: 20px' : '')}
`;
Card.propTypes = {
	children: PropTypes.any,
};
export default Card;
