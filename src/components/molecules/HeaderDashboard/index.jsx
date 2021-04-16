import Link from "../../atoms/Link";
import { HeaderContainer, Logout } from "./styles";
import { useHistory } from "react-router-dom";
import Icon from "../../atoms/Icon";
import BackIcon from "../../../assets/images/icons/back.svg";

const HeaderDashboard = () => {
  const history = useHistory();
  const handleLogout = () => {
    history.goBack();
  };

  return (
    <HeaderContainer>
      <div className="backContainer">
        <Logout onClick={handleLogout}>
          <Icon
            src={BackIcon}
            alt="Botão Voltar"
            display={["block", "block"]}
          />
          <p>Voltar</p>
        </Logout>
      </div>
      <Link to="/about">Sobre nós</Link>
      <Link to="/contact">Contato</Link>
    </HeaderContainer>
  );
};

export default HeaderDashboard;
