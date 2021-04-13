import { useData } from "../../../providers/UserContext";
import { CardContainer } from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";

const CardPerfil = () => {
  const { userData } = useData();

  return (
    <CardContainer>
      <img src={Woman} alt="imagePerfil" />
      <div>
        <h1>
          {userData.name} - {userData.age}
        </h1>
        <Text size="large">
          {userData.address.road} -{userData.address.number}
        </Text>
        <p>
          {userData.address.city} -{userData.address.state}
        </p>
        <p>{userData.address.cep}</p>
      </div>
    </CardContainer>
  );
};
export default CardPerfil;
