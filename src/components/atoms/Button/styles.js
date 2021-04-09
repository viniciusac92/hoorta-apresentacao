import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 39px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;
  color: ${(props) =>
    props.styled === "primary"
      ? "#F9F9F9"
      : props.style === "second"
      ? "#09B44D"
      : null};

  background-color: ${(props) =>
    props.styled === "primary"
      ? "#09B44D"
      : props.style === "second"
      ? "#F9F9F9"
      : null};

  width: ${(props) => (props.size === "normal" ? "250px" : null)};

  height: ${(props) => (props.size === "normal" ? "60px" : null)};
`;
