import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";
import { useMediaQuery } from "react-responsive";
import { ContainerStyled } from "./styles";
import { useHistory } from "react-router";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";
import ModalUser from "../ModalUser";

const UserProfileInfo = () => {
  const history = useHistory();

  const isDesktop = useMediaQuery({
    minWidth: 769,
  });

  const isMobile = useMediaQuery({
    maxWidth: 768,
  });

  const handleLogOut = (path) => {
    localStorage.clear();
    history.push(path);
  };

  return (
    <ContainerStyled>
      <ContainerStyled.IconModal>
        <ModalUser />
      </ContainerStyled.IconModal>
      {isMobile && <CardProfileMobile />}
      {isDesktop && <CardProfile />}
      <ContainerStyled.Text>
        <InfoCC />
        <Button color="primary" size="medium" onClick={() => handleLogOut("/")}>
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
