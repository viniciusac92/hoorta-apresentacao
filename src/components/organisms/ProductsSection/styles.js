import styled from "styled-components";
import theme from "../../../styles/theme";

export const ProductsListStyled = styled.div`
	height: auto;
	max-width: 100%;
	margin: 30px 20px;
	overflow: hidden;

	@media screen and (min-width: 800px) {
		/* height: auto; */
		max-width: 1046px;
		a {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			align-items: center;
		}
	}
`;

export const TitleDivStyled = styled.div`
	display: flex;
	flex-direction: row;
`;

export const BottomContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-right: 2rem;
`;

export const ContainerInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 8rem;

	@media screen and (min-width: 800px) {
		padding-left: 18rem;
	}
`;

export const TopContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
