import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import People from "../../assets/people.svg";
import ArrowRight from "../../assets/arrowRight.svg";
import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";


const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef(); //como se tivesse pegando com o getElementByID
  const inputAge = useRef();
  const history = useHistory();
 

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    
    history.push('/usuarios');
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People}></Image>

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow-right" src={ArrowRight} />
        </Button>
      
      </ContainerItens>
    </Container>
  );
};

export default App;
