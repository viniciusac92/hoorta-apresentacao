import { useParams } from "react-router";

const StoreProfile = () => {
  const { id } = useParams();

  return <div>Perfil da Loja {id}</div>;
};

export default StoreProfile;
