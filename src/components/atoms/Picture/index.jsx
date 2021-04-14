import { ImgStyled } from "./styles";

const Picture = ({ image, width, height, position, top, left, isRadius }) => {
  return (
    <ImgStyled
      image={image}
      width={width}
      height={height}
      position={position}
      top={top}
      left={left}
      isRadius={isRadius}
    />
  );
};
export default Picture;
