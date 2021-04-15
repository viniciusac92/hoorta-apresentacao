import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";
import { useMediaQuery } from "react-responsive";
import { ContainerStyled } from "./styles";

const UserProfileInfo = () => {
  const isDesktop = useMediaQuery({
    minWidth: 769,
  });

  const isMobile = useMediaQuery({
    maxWidth: 768,
  });

  return (
    <ContainerStyled>
      {isMobile && <CardProfileMobile />}
      {isDesktop && <CardProfile />}

      <ContainerStyled.Text>
        <InfoCC />
        <Button color="primary" size="large">
          Sair
        </Button>
      </ContainerStyled.Text>

      <ContainerStyled.Register>
        <Link to="/">
          Quer vender seus produtos? Então, torne-se um vendedor!
        </Link>
      </ContainerStyled.Register>
    </ContainerStyled>
  );
};
export default UserProfileInfo;
