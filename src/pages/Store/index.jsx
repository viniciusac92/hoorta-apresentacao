import {useEffect} from "react";
import {useParams} from "react-router";
import ListProducts from "../../components/molecules/ListProducts";
import {getOneStore} from "../../helper/stores";
import {useStores} from "../../providers/StoresContext";
import API from "../../services/api";

const Store = () => {
	const {id} = useParams();
	const {storeData, setStoreData} = useStores();

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

	useEffect(() => {
		getStoreData(id);
	}, []);

	return <div>{console.log(storeData)}</div>;
};

export default Store;
