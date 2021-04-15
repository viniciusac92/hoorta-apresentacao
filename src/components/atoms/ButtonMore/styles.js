import styled from "styled-components";
import theme from "../../../styles/theme";

export const ButtonMoreStyled = styled.button`
	border: none;
	box-shadow: ${theme.shadow};
	padding: 0px;
	color: ${theme.color.black};
	background-color: ${theme.color.gray};
	width: ${({size}) => (size === "large" ? "1rem" : "0.6rem")};
	height: ${({size}) => (size === "large" ? "1rem" : "0.6rem")};

	@media screen and (min-width: 800px) {
		width: ${({size}) => (size === "large" ? "45px" : "20px")};
		height: ${({size}) => (size === "large" ? "45px" : "20px")};
	}
`;
