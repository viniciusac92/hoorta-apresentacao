import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";
import { useMediaQuery } from "react-responsive";

import { ContainerStyled } from "./styles";
const UserProfileInfo = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <ContainerStyled>
      {isMobile ? <CardProfileMobile /> : <CardProfile />}

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
