import styled from "styled-components";
import theme from "../../../styles/theme";

export const ButtonLessStyled = styled.button`
	border: none;
	box-shadow: ${theme.shadow};
	padding: 0px;
	color: ${theme.color.black};
	background-color: ${theme.color.gray};
	width: ${({size}) => (size === "large" ? "45px" : "20px")};
	height: ${({size}) => (size === "large" ? "45px" : "20px")};
`;
