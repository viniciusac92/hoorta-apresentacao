import styled from "styled-components";
import theme from "../../../styles/theme";

const { color, shadow, radius } = theme;

export const StyledModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  outline: none;

  background-color: ${color.white};
  box-shadow: ${shadow};
  border-radius: ${radius};
`;

export const EditButton = styled.button`
  background: none;
  clip-path: view-box;
`;
