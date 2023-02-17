import styled from "styled-components";
import Background from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 40px;
  width: 17rem;
`;

export const InputLabel = styled.p`
  color: #eeeeee;
  letter-spacing: -0.408px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-left: 15px;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  border: none;
  outline: none;
  padding-left: 15px;
  width: 100%;
  height: 2.5em;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;
