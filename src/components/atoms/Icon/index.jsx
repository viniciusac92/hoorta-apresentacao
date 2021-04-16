import { IconStyled } from "./styles";

const Icon = ({ src, alt, display, isRadius }) => {
  return (
    <IconStyled
      src={src}
      alt={alt}
      display={display}
      isRadus={isRadius}
    ></IconStyled>
  );
};

export default Icon;
