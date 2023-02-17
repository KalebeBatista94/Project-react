import styled from "styled-components";


export const Button = styled.button`
  width: 100%;
  height: 2.8em;
  margin-top: 70px;
  background:${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
  border-radius: 14px;
  border: ${props => props.isBack ? '2px solid #fff' : 'none'};
  font-weight: bold;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: 0.5s;
  
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
