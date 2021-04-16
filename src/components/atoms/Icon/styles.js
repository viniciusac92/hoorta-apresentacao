import styled from "styled-components";

export const IconStyled = styled.img`
	max-width: 44px;
	margin: 0 auto;
	padding: 15px;
	display: ${({display}) => display[1] || "block"};

	@media screen and (min-width: 800px) {
		display: ${({display}) => display[0] || "block"};
	}
`;
