import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";
<<<<<<< HEAD
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
=======

import {ContainerStyled} from "./styles";
const UserProfileInfo = () => {
	return (
		<ContainerStyled>
			{/* <CardProfileMobile /> */}

			{/* <CardProfile /> */}

			<ContainerStyled.Text>
				<InfoCC />
				<Link>Quer vender seus produtos? Então, torne-se um vendedor!</Link>
			</ContainerStyled.Text>

			<Button color="primary" size="large">
				Sair
			</Button>
		</ContainerStyled>
	);
>>>>>>> 1d249fbefaed3bda6274c98adb2358cc8f657dae
};
export default UserProfileInfo;
