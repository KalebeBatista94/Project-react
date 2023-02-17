import styled from "styled-components";
import Background from "../../assets/background2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size:cover;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 40px;
  width: 17rem;
`;

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  width: 100%;
  height: 2.8em;
  outline: none;
  border: none;

  p {
    color: #fff;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    transition: .5s;
  }

  button:hover {
    transform: scale(1.3);
  }
`;
