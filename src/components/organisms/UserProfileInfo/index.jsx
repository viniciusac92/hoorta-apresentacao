import Link from "../../atoms/Link";
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

      <ContainerStyled.Text>
        <InfoCC />
        <Link>Quer vender seus produtos? Então, torne-se um vendedor!</Link>
      </ContainerStyled.Text>

      <Button color="primary" size="large">
        Sair
      </Button>
    </ContainerStyled>
  );
};
export default UserProfileInfo;
