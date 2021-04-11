import TextHeader from "../TextHeader";
import Text from "../Text";
import Icon from "../Icon";
import { StyledAnchor, CardContainer, Rating, InfoContainer } from "./styles";
import ratingIcon from "../../../assets/images/icons/rating.svg";

const StoreCard = ({
  userId,
  businessName,
  registeredName,
  description,
  rating,
}) => {
  return (
    <CardContainer>
      <StyledAnchor onClick={() => console.log("clicou")}>
        <Rating>
          <Icon src={ratingIcon} alt="Ícone de Avaliação" /> 5.0
        </Rating>
        <InfoContainer>
          <TextHeader>{businessName}</TextHeader>
          <Text>{description}</Text>
        </InfoContainer>
      </StyledAnchor>
    </CardContainer>
  );
};

export default StoreCard;
