import { useData } from "../../../providers/UserContext";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";
import Text from "../../atoms/Text";

const InfoCC = () => {
  const { userData } = useData();

  const infos = [
    { dice: "Junia" },
    { dice: "5252 4545 2323 0101" },
    { dice: "01 / 2022" },
    { dice: "641" },
    // { dice: userData.owner },
    // { dice: userData.cc.cc_number},
    // { dice: userData.cc.expiration },
    // { dice: userData.cc.cvv },
  ];

  return (
    <CardInfoUserProfile>
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
