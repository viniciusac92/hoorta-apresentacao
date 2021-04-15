import { useData } from "../../../providers/UserContext";
import { CardStyled } from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";

const CardProfile = () => {
  const { userData } = useData();

  const text = [
    { dice: ["Rua Bragança", " - ", "135, apto 401"] },
    { dice: ["Maringá", " - ", "PR"] },
    { dice: "87020220" },
    { dice: "junia@mail.com" },
    { dice: "(44) 00000-0000" },
    // { dice: [userData.address.road, " - ", userData.address.number] },
    // { dice: [userData.address.city, " - ", userData.address.state] },
    // { dice: userData.address.cep },
    // { dice: userData.email },
    // { dice: userData.phone },
  ];

  return (
    <CardStyled>
      <CardStyled.Background>
        <CardStyled.Image src={Woman} alt="imagePerfil" />

        <CardStyled.Container>
          <Text size="medium" weigth="semiBold">
            Junia - 25
            <Icon src={IconEdit} alt="" />
          </Text>

          {text.map(({ dice }, key) => (
            <Text key={key} size="small">
              {dice}
            </Text>
          ))}
        </CardStyled.Container>
      </CardStyled.Background>
    </CardStyled>
  );
};
export default CardProfile;
