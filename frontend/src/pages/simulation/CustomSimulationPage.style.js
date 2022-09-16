import styled from "styled-components";

const CustomConatiner = styled.div`
  display: flex;
  height: 100%;
  width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.5rem;

  @media screen and (max-width: 830px) {
    font-size: 1.3rem;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    width: 400px;
  }

  .start {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      margin-bottom: 1rem;
      cursor: pointer;
    }
  }
`;

const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TeamCase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    margin-top: 1rem;
  }
`;
const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: 500px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;

  .title {
    margin-top: 10px;
    width: 90%;
    text-align: center;
    font-size: 1.5rem;
  }

  .content {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
  }

  .weather {
    display: flex;
    font-size: 1rem;
  }
  .team {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1.3rem;
  }
  .filter {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }
  .candidates {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;

    .candi {
      margin: 5px 0;
    }
  }
  .change {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }

  input {
    width: 50%;
    border-bottom: 1px solid black;
    margin-right: 10px;
  }
  button {
    font-size: 1rem;
    padding: 0.2rem 0.4rem;
  }
`;
export { CustomConatiner, TeamContainer, TeamCase, ModalBox };