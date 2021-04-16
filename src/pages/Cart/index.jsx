import MenuDashboard from "../../components/template/MenuDashboard";
import CartInfo from "../../components/molecules/CartInfo";
import CartContainer from "../../components/organisms/CardContainer";
import CardCart from "../../components/molecules/CardCart";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div>
      <MenuDashboard>
        <CartContainer>
          {cartProducts.map(({ product }, key) => (
            <CardCart
              amout={product?.info.amout}
              price={product?.info.price}
              productName={product?.info.name}
              productorName={product?.info.description}
            />
          ))}
          <CartInfo deliveryPrice="5" purchases={cartProducts} />
        </CartContainer>
      </MenuDashboard>
    </div>
  );
};

export default Cart;
