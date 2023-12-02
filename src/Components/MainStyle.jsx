import styled from "styled-components";

export const Box = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Div = styled.div`
  background-color: #ffffff30;
  padding: 10px;
  border-radius: 15px;
  width: 400px;
  text-align: right;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 85vw;
    background-color: #ffffff60;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  background-color: #ffffff30;
  padding: 8px;
  width: 400px;
  border-radius: 10px 20px 30px 40px;

  @media (max-width: 768px) {
    width: 85vw;
    background-color: #ffffff60;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  color: #483d8b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.6s;
  width: 80px;
  height: 50px;
  margin-left: 15px;

  &:hover {
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const ButtonOp = styled(Button)`
  background-color: rgba(138, 43, 226, 0.5);
  font-size: 20px;
`;

export const ButtonNum = styled(Button)`
  background-color: rgba(123, 104, 238, 0.8);
  font-size: 20px;
`;
