import { useData } from "../../../providers/UserContext";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";
import Text from "../../atoms/Text";

const InfoCC = () => {
  const { userData } = useData();

  const infos = [
    { dice: "Nome: Junia" },
    { dice: "Número: 5252 4545 2323 0101" },
    { dice: "Validade: 01 / 2022" },
    { dice: "CVV: 641" },
    // { dice: ["Nome: ", userData.owner] },
    // { dice: ["Número: ", userData.cc.cc_number] },
    // { dice: ["Validade: ", userData.cc.expiration] },
    // { dice: ["CVV", userData.cc.cvv] },
  ];

  return (
    <CardInfoUserProfile size="large">
      <Text size="small" weigth="semiBold">
        Dados do cartão
      </Text>
      {infos.map(({ dice }, key) => (
        <Text key={key} size="small">
          {dice}
        </Text>
      ))}
    </CardInfoUserProfile>
  );
};
export default InfoCC;
