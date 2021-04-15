import Figure from "../../components/atoms/Figure";
import Picture from "../../components/atoms/Picture";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";
import MenuDashboard from "../../components/template/MenuDashboard";
import TextHeader from "../../components/atoms/TextHeader";
import Icon from "../../components/atoms/Icon";
import cartIcon from "../../assets/images/icons/shoppingCart.svg";

const Cart = () => {
  return (
    <div>
      <MenuDashboard>
        <TextHeader size="medium" align="left">
          Carrinho
          <Icon src={cartIcon} />
        </TextHeader>
      </MenuDashboard>
      <Picture
        image={footerPicture}
        width={["320px", "444px"]}
        height={["155px", "215px"]}
        position={["relative", "absolute"]}
        top={["0px", "calc(100% - 215px)"]}
        left={["-37"]}
      />
    </div>
  );
};

export default Cart;
