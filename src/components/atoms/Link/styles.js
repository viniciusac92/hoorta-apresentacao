import styled from "styled-components";
import theme from "../../../styles/theme";

export const LinkStyled = styled.a`
	font-family: ${theme.font};
	color: ${({color}) =>
		color === "primary" ? `${theme.color.primary}` : `${theme.color.black}`};
	cursor: pointer;
	text-decoration: none;

	font-size: ${(props) =>
		props.size === "small" ? "1.5vw" : props.size === "large" ? "3vw" : null};

	@media screen and (min-width: 800px) {
		font-size: ${(props) =>
			props.size === "small" ? "12px" : props.size === "large" ? "16px" : null};
	}
`;
