import Button from "../../components/atoms/Button";
import Figure from "../../components/atoms/Figure";
import Input from "../../components/atoms/Input";
import Picture from "../../components/atoms/Picture";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";
import FormRegister from "../../components/molecules/FormRegister";
import { useMediaQuery } from "react-responsive";
import { RegisterStyled } from "./styles";

const Register = () => {
  const isDesktop = useMediaQuery({
    minWidth: 769,
  });

  return (
    <div>
      <Header />
      <Figure type="square">
        <Picture
          image={heartImage}
          width={["218px", "437px"]}
          height={["206px", "412px"]}
          top={["30px"]}
          left={["-40px", "-130px"]}
          position={["relative"]}
        />
      </Figure>
      <RegisterStyled>
        <FormRegister />
      </RegisterStyled>
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
          width={["305px"]}
          height={["444px"]}
          top={["100px"]}
          left={["85px"]}
          position={["relative"]}
        />
      </Figure>
      <Picture
        image={footerPicture}
        width={[null, "444px"]}
        height={[null, "215px"]}
        position={[null, "absolute"]}
        top={[null, "calc(100% - 215px)"]}
        left={[null, "0"]}
      />
      {isDesktop && <HomeInfo />}
    </div>
  );
};

export default Register;
