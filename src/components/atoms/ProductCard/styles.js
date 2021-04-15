import styled from "styled-components";
import theme from "../../../styles/theme";
import Hortifruti from "../../../assets/images/products/tomateCereja.jpg";

export const CardStyled = styled.div`
	margin-bottom: 15px;
	border: none;
	box-shadow: ${theme.shadow.under};
	width: 90%;
	height: 6rem;
	display: flex;
	flex-direction: row;
	background-image: url(${Hortifruti});
	background-position: left;
	background-size: 6rem;
	background-repeat: no-repeat;

	@media screen and (min-width: 800px) {
		width: 99%;
		height: 21rem;
		border-radius: ${theme.radius};
		background-image: url(${Hortifruti});
		background-position: left;
		background-size: contain;
		background-repeat: repeat-y;
	}
`;
