import React from "react";
import People from './assets/people.svg'
import ArrowRight from './assets/arrowRight.svg'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';

const App = () => {
  // const hello = 'Hello React'

  return (

    <Container>
      <Image alt="logo-imagem" src={People}></Image>

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar <img alt="arrow-right" src={ArrowRight} /></Button>
      </ContainerItens>

    </Container>
  );
}

export default App;