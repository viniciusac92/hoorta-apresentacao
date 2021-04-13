import {useEffect} from "react";
import {useParams} from "react-router";
import {getOneStore} from "../../helper/stores";
import {useStores} from "../../providers/StoresContext";
import API from "../../services/api";
import Picture from "../../components/atoms/Picture";
import ListProducts from "../../components/molecules/ListProducts";
import Header from "../../components/organisms/Header";
import footerPicture from "../../assets/images/footerPicture.png";
import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import {GridContainer} from "./styles";
import {getProducts} from "../../helper/products";

const Store = () => {
	const {id} = useParams();
	const {storeData, setStoreData} = useStores();
	const {productsData, setProductsData} = useStores();

	const getStoreData = async (id) => {
		try {
			const response = await API.get(getOneStore(id), {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
				},
			});

			setStoreData(response.data);

			const productsResponse = await API.get(`/products/?userId=1`, {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
				},
			});

			setProductsData(productsResponse.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getStoreData(id);
	}, []);

	console.log(storeData);
	console.log(productsData);
	return (
		<GridContainer>
			<div className="SidebarContainer">
				<div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quam
					similique aliquam quibusdam aut! Dignissimos maiores sapiente,
					consequatur veritatis ratione id officiis odit necessitatibus sed,
					pariatur doloribus corrupti, provident saepe!
				</div>
			</div>
			<div className="HeaderContainer">
				<DashboardHeader />
			</div>
			<div className="SectionContainer">
				<StoreSection />

				<Header />

				<ListProducts />

				<Picture
					image={footerPicture}
					width={["320px", "444px"]}
					height={["155px", "215px"]}
					position={["relative", "absolute"]}
					top={["0px", "calc(100% - 215px)"]}
					left={["0", "0"]}
				/>
			</div>
		</GridContainer>
	);
};

export default Store;
