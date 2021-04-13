import CardCart from "../../components/molecules/CardCart";
import ListProducts from "../../components/molecules/ListProducts";
// import SideBar from "../../components/molecules/SideBar";

const Tests = () => {
	return (
		<div>
			<CardCart
				amount="1"
				productName="Alface Crespa"
				productorName="Nome do produtor 1"
				price="3,50"
			/>
		</div>
	);
};

export default Tests;
