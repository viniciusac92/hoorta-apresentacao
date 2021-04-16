import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import TextHeader from "../../atoms/TextHeader";
import HomeInfoStyled from "./style";
import leaf from "../../../assets/images/icons/leaf.svg";
import heart from "../../../assets/images/icons/heart.svg";
import box from "../../../assets/images/icons/box.svg";
import truck from "../../../assets/images/icons/truck.svg";
import food from "../../../assets/images/icons/food.svg";

const HomeInfo = () => {
  const infos = [
    { icon: leaf, text: "100% Orgânico" },
    {
      icon: heart,
      text: "Alimentos frescos",
    },
    { icon: box, text: "Proximidade ao produtor" },
    { icon: truck, text: "Entrega agendada" },
    { icon: food, text: "Praticidade e saúde" },
  ];

  return (
    <HomeInfoStyled>
      <TextHeader size="medium" align="left">
        O que temos de bom?
      </TextHeader>
      <HomeInfoStyled.Container>
        {infos.map(({ icon, text }, key) => (
          <HomeInfoStyled.Wrap key={key}>
            <Icon src={icon} display={["block", "block"]} /> <Text>{text}</Text>
          </HomeInfoStyled.Wrap>
        ))}
      </HomeInfoStyled.Container>
    </HomeInfoStyled>
  );
};

export default HomeInfo;
