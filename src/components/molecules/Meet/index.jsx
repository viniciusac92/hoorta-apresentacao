import { MeetStyled } from "./style";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

const Meet = () => {
  return (
    <MeetStyled>
      <Text weigth="semiBold" size="large">
        Alimentos frescos
      </Text>
      <Text weigth="semiBold" size="large">
        orgânicos e baratos.
      </Text>
      <Text weigth="semiBold" size="large">
        Na porta da sua casa!
      </Text>
      <div>
        <Button styled="primary">Conhecer</Button>
      </div>
    </MeetStyled>
  );
};

export default Meet;
