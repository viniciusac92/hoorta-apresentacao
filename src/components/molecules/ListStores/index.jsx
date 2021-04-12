import StoreCard from "../../atoms/StoreCard";
import { useStores } from "../../../providers/StoresContext";

const ListStores = () => {
  const { listStores } = useStores();
  return (
    <div>
      <h1>Produtores</h1>
      {listStores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </div>
  );
};

export default ListStores;
