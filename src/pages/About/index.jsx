import AboutInfo from "../../components/molecules/AboutInfo";

import Picture from "../../components/atoms/Picture";

import footerPicture from "../../assets/images/footerPicture.png";
import Header from "../../components/organisms/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutInfo />

      <Picture
        image={footerPicture}
        width={["320px", "444px"]}
        height={["155px", "215px"]}
        position={["absolute", "absolute"]}
        top={["520vw", "42.9vw"]}
        left={["0", "0"]}
      />
    </div>
  );
};
export default About;
