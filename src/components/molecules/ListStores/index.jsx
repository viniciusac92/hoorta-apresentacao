import StoreCard from "../../atoms/StoreCard";
import { useStores } from "../../../providers/StoresContext";

const ListStores = () => {
  const { listStores } = useStores();
  return (
    <div>
      {listStores.map((store, index) => (
        <StoreCard
          key={index}
          userId={store.userId}
          businessName={store.businessName}
          description={store.description}
        />
      ))}
    </div>
  );
};

export default ListStores;
