import styled from "styled-components";

const HomeInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: 780px) {
    margin-top: 105px;
    width: 50vw;
    transform: translateX(calc(45vw - 20px));
  }
`;

HomeInfoStyled.Container = styled.div`
  display: flex;
  margin: 15px 0;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 620px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

HomeInfoStyled.Wrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  margin: 10px 0;

  @media screen and (min-width: 620px) {
    max-width: 100px;
  }
`;

export default HomeInfoStyled;
