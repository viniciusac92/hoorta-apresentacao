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

const Register = () => {
  return (
    <div>
      <Header />
      <FormRegister />
      <Figure type="square">
        <Picture
          image={heartImage}
          width="437px"
          height="412px"
          top="30px"
          left="-130px"
          position="relative"
        />
      </Figure>
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
          width="305px"
          height="444px"
          top="100px"
          left="85px"
          position="relative"
        />
      </Figure>
      <Picture
        image={footerPicture}
        width="444px"
        height="215px"
        position="absolute"
        top="100%"
        left="0"
      />
      <HomeInfo />
    </div>
  );
};

export default Register;
