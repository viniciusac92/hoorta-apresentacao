import Button from "../../components/atoms/Button";
import Figure from "../../components/atoms/Figure";
import Input from "../../components/atoms/Input";

import ModalUser from "../../components/organisms/ModalUser";
import FormLogin from "../../components/molecules/FormLogin";
import HeaderNavBar from "../../components/molecules/HeaderNavBar";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import FormRegister from "../../components/molecules/FormRegister";

const Tests = () => {
  return (
    <div>
      <Header />
      <Meet />
      <FormRegister />
      <FormLogin />
      <ModalUser />
    </div>
  );
};

export default Tests;
