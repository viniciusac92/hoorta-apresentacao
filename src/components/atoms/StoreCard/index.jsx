import TextHeader from "../TextHeader";
import Text from "../Text";
import Icon from "../Icon";
import {
  CardContainer,
  RatingMobile,
  RatingDesktop,
  InfoContainer,
  Time,
} from "./styles";
import { Link } from "react-router-dom";
import ratingIcon from "../../../assets/images/icons/rating.svg";

const StoreCard = ({ store }) => {
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
      <Link to={{ pathname: `store/${id}` }}>
        <RatingMobile>
          <Icon src={ratingIcon} alt="Ícone de Avaliação" /> 5.0
        </RatingMobile>
        <InfoContainer>
          <RatingDesktop>
            <Icon src={ratingIcon} alt="Ícone de Avaliação" /> 5.0
          </RatingDesktop>
          <TextHeader fontWeight={"semiBold"}>{businessName}</TextHeader>
          <Time>40 - 60 min</Time>
          <div className="descriptionContainer">
            <Text>{description}</Text>
          </div>
        </InfoContainer>
      </Link>
    </CardContainer>
  );
};

export default StoreCard;
