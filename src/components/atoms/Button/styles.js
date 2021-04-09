import styled from "styled-components";
import theme from "../../../styles/theme";

export const ButtonStyled = styled.button`
  border: none;
  border-radius: ${theme.radius};
  box-shadow: ${theme.shadow};
  padding: 10px;

  color: ${(props) =>
    props.styled === "primary"
      ? theme.color.white
      : props.styled === "second"
      ? theme.color.primary
      : null};

  background-color: ${(props) =>
    props.styled === "primary"
      ? theme.color.primary
      : props.styled === "second"
      ? theme.color.white
      : null};

  font-size: ${(props) =>
    props.size === "large" ? "20px" : props.size === "small" ? "14px" : null};

  font-weight: ${(props) => (props.size === "large" ? "500" : null)};

  width: ${(props) =>
    props.size === "small"
      ? "290px"
      : props.size === "large"
      ? "356.67px"
      : null};

  height: ${(props) =>
    props.size === "small" ? "35px" : props.size === "large" ? "45px" : null};
`;
