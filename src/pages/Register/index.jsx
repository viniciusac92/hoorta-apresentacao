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
<<<<<<< HEAD
          width="437px"
          height="412px"
          top="30px"
          left="-130px"
          position="relative"
=======
          width={["218px", "437px"]}
          height={["206px", "412px"]}
          top={["30px"]}
          left={["-40px", "-130px"]}
          position={["relative"]}
>>>>>>> a919a6df1a4a5d4986ff96104e78d115666b4675
        />
      </Figure>
      <Figure type="rectangle">
        <Picture
          image={vegetablePack}
<<<<<<< HEAD
          width="305px"
          height="444px"
          top="100px"
          left="85px"
          position="relative"
=======
          width={["305px"]}
          height={["444px"]}
          top={["100px"]}
          left={["85px"]}
          position={["relative"]}
>>>>>>> a919a6df1a4a5d4986ff96104e78d115666b4675
        />
      </Figure>
      <Picture
        image={footerPicture}
<<<<<<< HEAD
        width="444px"
        height="215px"
        position="absolute"
        top="100%"
        left="0"
=======
        width={["320px", "444px"]}
        height={["155px", "215px"]}
        position={["relative", "absolute"]}
        top={["0px", "calc(100% - 215px)"]}
        left={["0", "0"]}
>>>>>>> a919a6df1a4a5d4986ff96104e78d115666b4675
      />
      <HomeInfo />
    </div>
  );
};

export default Register;
