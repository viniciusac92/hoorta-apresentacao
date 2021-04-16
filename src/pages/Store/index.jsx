import { useEffect } from "react";
import { useParams } from "react-router";
import { getOneStore } from "../../helper/stores";
<<<<<<< HEAD
=======
import { getProducts } from "../../helper/products";
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
import { useStores } from "../../providers/StoresContext";
import API from "../../services/api";
import ProductsSection from "../../components/organisms/ProductsSection";
import { useProducts } from "../../providers/ProductsContext";
import MenuDashboard from "../../components/template/MenuDashboard";

const Store = () => {
  const { id } = useParams();
  const { storeData, setStoreData } = useStores();
  const { productsData, setProductsData } = useProducts();

  const getStoreData = async (id) => {
    try {
      const response = await API.get(getOneStore(id), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
<<<<<<< HEAD

      setStoreData(response.data);
=======
      setStoreData(response.data);
      console.log(storeData);
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
    } catch (e) {
      console.log(e);
    }
  };

  const getStoreProductsData = async (id) => {
    try {
      const productsResponse = await API.get(
<<<<<<< HEAD
        `/products?userId=${storeData.userId}&storeId=${id}`,
=======
        getProducts(storeData.userId, id),
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
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
    <MenuDashboard>
      <ProductsSection productsData={productsData} currentStoreId={id} />
    </MenuDashboard>
  );
};

export default Store;
