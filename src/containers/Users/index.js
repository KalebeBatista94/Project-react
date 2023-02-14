import React, { useState, useEffect } from "react";

import axios from "axios"; //integração back-end

import Avatar from "../../assets/avatar.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import Trash from "../../assets/trashCan.svg";

import { Container, Image, ContainerItens, H1, Button, User } from "./styles";
import { useHistory } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get("http://localhost:3001/users");

      setUsers(allUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push('/');
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar}></Image>

      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trashCan" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="arrow-right" src={ArrowLeft} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;