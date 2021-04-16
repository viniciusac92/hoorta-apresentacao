import { useData } from "../../../providers/UserContext";
import { CardStyled } from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";

const CardProfileMobile = () => {
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
    <CardStyled.Container>
      <CardStyled>
        <CardStyled.Background>
          <CardStyled.Title>
            <Text size="mediumPlus" weigth="semiBold">
              Junia - 26
            </Text>

            {/* <CardStyled.Icon>
              <Icon src={IconEdit} alt="" display={["block", "block"]} />
            </CardStyled.Icon> */}
          </CardStyled.Title>
        </CardStyled.Background>
      </CardStyled>

      <CardStyled.Image>
        <img src={Woman} alt="imagePerfil" />
      </CardStyled.Image>

      <CardInfoUserProfile>
        {text.map(({ dice }, key) => (
          <Text key={key} size="small">
            {dice}
          </Text>
        ))}
      </CardInfoUserProfile>
    </CardStyled.Container>
  );
};
export default CardProfileMobile;
