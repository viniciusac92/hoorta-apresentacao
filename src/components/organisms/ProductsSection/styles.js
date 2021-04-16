import styled from "styled-components";
import ProductCard from "../../atoms/ProductCard";

export const ProductCardStyled = styled(ProductCard)`
	p::first > {
		font-size: 2vw;
	}
`;

export const ProductsListStyled = styled.div`
	height: auto;
	max-width: 100%;
	margin: 30px 20px;
	overflow: hidden;

	@media screen and (min-width: 800px) {
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
	align-content: center;
	justify-content: center;

	> div {
		top: 5px;
		left: 35px;
	}

	@media screen and (min-width: 800px) {
		> div {
			top: 20px;
			left: 75px;
		}
	}
`;

export const BottomContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 61vw;

	div {
		height: 5vw;
		width: 10vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	p {
		margin: 0rem 0rem 0rem 0rem;
	}

	img {
		padding: 0px;
	}

	> button {
		height: 1.9rem;
		padding: 0vw;
		width: 25vw;
		font-size: 13px;
	}

	> p {
		margin: 0rem 0rem 0rem 0rem;
	}

	@media screen and (min-width: 800px) {
		height: 2vw;
		width: 38vw;
		align-items: center;

		div {
			height: 2vw;
		}

		button:nth-child(2) {
			height: 2.67vw;
			width: 9vw;
			font-size: 15px;
			font-size: 23px;
		}
	}

	@media screen and (min-width: 1500px) {
		width: 28vw;
	}
`;

export const ContainerInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 26vw;
	height: 25vw;

	@media screen and (min-width: 800px) {
		padding-left: 18rem;
		height: 22vw;
		width: 38vw;
	}
	@media screen and (min-width: 1500px) {
		height: 12.5vw;
		width: 28vw;
	}
`;

export const TopContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 74vw;
	height: 5vw;
	align-items: center;
	margin-bottom: 2.5vw;
	> img {
		height: 4vw;
	}

	@media screen and (min-width: 800px) {
		width: 40vw;
		height: fit-content;
		margin-bottom: 0vw;
		> img {
			height: 2vw;
		}
	} ;
`;
