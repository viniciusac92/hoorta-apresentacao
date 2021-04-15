import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";

import { ContainerStyled } from "./styles";
const UserProfileInfo = () => {
  return (
    <ContainerStyled>
      {/* <CardProfileMobile /> */}

      <CardProfile />

      <ContainerStyled.infos>
        <InfoCC />
        <Button color="primary" size="large">
          Sair
        </Button>
      </ContainerStyled.infos>
    </ContainerStyled>
  );
};
export default UserProfileInfo;
