import Icon from "../../atoms/Icon";
import OnlineStoreIcon from "../../../assets/images/icons/onlineStore.svg";
import FormRegisterStore from "../../molecules/FormRegisterStore";
import StyledContainer from "./styles";

const RegisterStoreSection = () => {
  return (
    <StyledContainer>
      <div className="HeaderContainer">
        <Icon
          src={OnlineStoreIcon}
          alt="Loja Online"
          display={["block", "block"]}
        />
        <h1>Registre sua Loja</h1>
      </div>
      <FormRegisterStore />
    </StyledContainer>
  );
};

export default RegisterStoreSection;
