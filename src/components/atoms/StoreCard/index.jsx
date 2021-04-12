import TextHeader from "../TextHeader";
import Text from "../Text";
import Icon from "../Icon";
import { StyledAnchor, CardContainer, Rating, InfoContainer } from "./styles";
import ratingIcon from "../../../assets/images/icons/rating.svg";
import { useHistory } from "react-router";
import { getOneStore } from "../../../helper/stores";

const StoreCard = ({ store }) => {
  const history = useHistory();
  const {
    userId,
    id,
    businessName,
    registeredName,
    description,
    rating,
  } = store;

  return (
    <CardContainer>
      <StyledAnchor to={{ pathname: `store/${id}` }}>
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
