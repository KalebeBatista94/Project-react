import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  /* width: 100%; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 40px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 50px 36px;
  border: 5px solid black;
  /* margin-bottom: 100px; */
`;

export const H1 = styled.h1`
  text-align: center;
  line-height: 40px;
  margin-bottom: 60px;
  font-weight: bold;
  color: #fff;
`;

export const InputLabel = styled.p`
  color: #eeeeee;
  letter-spacing: -0.408px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin-left: 15px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  margin-bottom: 34px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  border: none;
  outline: none;
  padding-left: 15px;
  width: 100%;
  height: 3.5em;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 64px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-weight: bold;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;