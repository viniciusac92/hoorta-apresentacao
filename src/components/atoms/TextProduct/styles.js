import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextProductStyled = styled.p`
	border: none;
	margin: 2rem 0rem 1.5rem 0rem;
	font-weight: ${({fontWeight}) =>
		fontWeight === "medium"
			? theme.weight.medium
			: fontWeight === "semiBold"
			? theme.weight.semiBold
			: null};

	font-size: ${({size}) =>
		size === "large" ? "0.7rem" : size === "medium" ? "0.6rem" : null};

	color: ${({color}) =>
		color === "black"
			? theme.color.black
			: color === "white"
			? theme.color.white
			: color === "primary"
			? theme.color.primary
			: null};

	@media screen and (min-width: 800px) {
		font-size: ${({size}) =>
			size === "large" ? "2.7rem" : size === "medium" ? "1.2rem" : null};
	}
`;
