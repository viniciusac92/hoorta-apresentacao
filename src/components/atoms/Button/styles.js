import styled from "styled-components";
import theme from "../../../styles/theme";

const handleColorTypes = (type, color) => {
	switch (type) {
		case "background":
			return color === "primary"
				? theme.color.primary
				: color === "secondary"
				? theme.color.white
				: null;

		case "text":
			return color === "primary"
				? theme.color.white
				: color === "secondary"
				? theme.color.primary
				: null;

		default:
			return null;
	}
};

const handleSizeTypes = (size) => {
	switch (size) {
		case "large":
			return {
				width: "300px",
				height: "91px",
				fontSize: "30px",
				lineHeight: "34px",
				weight: theme.weight.semiBold,
			};
		case "medium":
			return {
				width: "100%",
				height: "110px",
				fontSize: "18px",
				lineHeight: "34px",
				weight: theme.weight.semiBold,
			};
		case "small":
			return {
				width: "355px",
				height: "45px",
				fontSize: "20px",
				lineHeight: "34px",
				weight: theme.weight.medium,
			};
	}
};

export const ButtonStyled = styled.button`
	border: none;
	border-radius: ${theme.radius};
	box-shadow: ${theme.shadow.under};
	padding: 10px;
	color: ${({color}) => handleColorTypes("text", color)};
	background-color: ${({color}) => handleColorTypes("background", color)};
	width: ${({size}) => handleSizeTypes(size).width};
	height: ${({size}) => handleSizeTypes(size).height};
	font-size: ${({size}) => handleSizeTypes(size).fontSize};
	line-height: ${({size}) => handleSizeTypes(size).lineHeight};
	font-weight: ${({size}) => handleSizeTypes(size).weight};
	@media screen and (min-width: 780px) {
		line-height: ${({size}) => size === "large" && "54px"};
		font-size: ${({size}) => (size === "large" ? "36px" : "20px")};
		width: ${({size}) => (size === "large" ? "320px" : "356.67px")};
	}
`;
