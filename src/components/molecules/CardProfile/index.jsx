import { useData } from "../../../providers/UserContext";
import { CardStyled } from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";

const CardPerfil = () => {
  const { userData } = useData();

  return (
    <CardStyled>
      <CardStyled.BackgroundG>
        <CardStyled.Image src={Woman} alt="imagePerfil" />
        <div>
          <Text size="medium" weigth="semiBold">
            {userData.name} - {userData.age}
          </Text>
          <CardStyled.Container>
            <Text size="small">
              {userData.address.road} -{userData.address.number}
            </Text>
            <Text size="small">
              {userData.address.city} -{userData.address.state}
            </Text>
            <Text size="small">CEP: {userData.address.cep}</Text>
            <div>
              <Text size="small">{userData.email}</Text>
              <Text size="small">{userData.phone}</Text>
            </div>
          </CardStyled.Container>
        </div>
      </CardStyled.BackgroundG>
    </CardStyled>
  );
};
export default CardPerfil;
