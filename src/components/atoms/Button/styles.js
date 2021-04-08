import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 39px;

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
`;
