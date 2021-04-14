import {useEffect} from "react";
import {useParams} from "react-router";
import {getOneStore} from "../../helper/stores";
import {useStores} from "../../providers/StoresContext";
import API from "../../services/api";
import Picture from "../../components/atoms/Picture";
import ProductsSection from "../../components/organisms/ProductsSection";
import Header from "../../components/organisms/Header";
import footerPicture from "../../assets/images/footerPicture.png";
import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import {GridContainer} from "./styles";
import {useProducts} from "../../providers/ProductsContext";
import Sidebar from "../../components/molecules/SideBar";

const Store = () => {
	const {id} = useParams();
	const {storeData, setStoreData} = useStores();
	const {productsData, setProductsData} = useProducts();

	const getStoreData = async (id) => {
		try {
			const response = await API.get(getOneStore(id), {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
				},
			});

			setStoreData(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	const getStoreProductsData = async (id) => {
		try {
			const productsResponse = await API.get(
				`/products?userId=${storeData.userId}&storeId=${id}`,
				{
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem("token")
						)}`,
					},
				}
			);

			setProductsData(productsResponse.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getStoreData(id);
	}, []);

	useEffect(() => {
		getStoreProductsData(id);
	}, [storeData]);

	return (
		<GridContainer>
			<Sidebar />
			<div className="HeaderContainer">
				<DashboardHeader />
			</div>
			<div className="SectionContainer">
				<ProductsSection productsData={productsData} />

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
