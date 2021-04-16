import { useData } from "../../../providers/UserContext";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";
import Text from "../../atoms/Text";
import { InfosCCStyled } from "./styles";

const InfoCC = () => {
  const { userData } = useData();

  const infos = [
    // { dice: "Nome: Junia" },
    // { dice: "Número: 5252 4545 2323 0101" },

    { dice: ["Nome: ", userData.owner] },
    { dice: ["Número: ", userData.cc.cc_number] },
    // { dice: ["Validade: ", userData.cc.expiration] },
    // { dice: ["CVV", userData.cc.cvv] },
  ];

  return (
    <InfosCCStyled>
      <CardInfoUserProfile size="large">
        <Text size="large" weigth="semiBold">
          Dados do cartão
        </Text>
        <Text size="small">{userData.ower}</Text>
        <Text size="small">{userData.cc.cc_number}</Text>
      </CardInfoUserProfile>
    </InfosCCStyled>
  );
};
export default InfoCC;
