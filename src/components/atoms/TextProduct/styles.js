import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextProductStyled = styled.p`
	border: none;
	margin: 25px;
	font-weight: ${({fontWeight}) =>
		fontWeight === "medium"
			? theme.weight.medium
			: fontWeight === "semiBold"
			? theme.weight.semiBold
			: null};

	font-size: ${({size}) =>
		size === "large" ? "50px" : size === "medium" ? "36px" : null};

	color: ${({color}) =>
		color === "black"
			? theme.color.black
			: color === "white"
			? theme.color.white
			: color === "primary"
			? theme.color.primary
			: null};
`;
