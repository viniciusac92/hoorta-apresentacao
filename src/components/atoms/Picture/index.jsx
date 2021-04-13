import {ImgStyled} from "./styles";

const Picture = ({image, width, height, position, top, left}) => {
	return (
		<ImgStyled
			image={image}
			width={width}
			height={height}
			position={position}
			top={top}
			left={left}
		/>
	);
};
export default Picture;
