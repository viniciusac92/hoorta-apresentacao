import { useHistory } from "react-router";
import { LinkStyled } from "./styles";

const Link = ({ size, children, to }) => {
  const history = useHistory();

  return (
    <div>
      <LinkStyled size={size} onClick={() => history.push(to)}>
        {children}
      </LinkStyled>
    </div>
  );
};
export default Link;
