import styled from "styled-components";

const MeetStyled = styled.div`
  margin: 50px auto;
  text-align: center;
  width: 90%;
  margin-bottom: 50px;

  @media screen and (min-width: 780px) {
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 120px 0px 0px 5%;
    line-height: 65px;
    text-align: left;
    height: 370px;
  }
`;

MeetStyled.ButtonWrap = styled.div`
  margin-top: 50px;
`;

export default MeetStyled;
