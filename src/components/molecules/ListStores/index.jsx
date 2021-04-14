import StoreCard from "../../atoms/StoreCard";
import { useStores } from "../../../providers/StoresContext";
import { List } from "./style";
import TextHeader from "../../atoms/TextHeader";
const ListStores = () => {
  const { listStores } = useStores();
  return (
    <List>
      <div>
        <TextHeader size={"large"}>Produtores</TextHeader>
      </div>
      {listStores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </List>
  );
};

export default ListStores;
