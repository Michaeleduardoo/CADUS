import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Trash from "../../assets/icon-lixo.png";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const getUsers = async () => {
    try {
      const response = await api.get("/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao obter usuários", error);
    }
  };

  const postUsers = async () => {
    try {
      if (
        !inputName.current.value ||
        !inputAge.current.value ||
        !inputEmail.current.value
      ) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      await api.post("/usuarios", {
        name: inputName.current.value,
        age: inputAge.current.value,
        email: inputEmail.current.value,
      });

      getUsers();
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`);
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
        <input
          type="text"
          name="Nome"
          placeholder="Nome"
          required
          ref={inputName}
        />
        <input
          type="number"
          name="Idade"
          placeholder="Idade"
          required
          ref={inputAge}
        />
        <input type="email" placeholder="Email" required ref={inputEmail} />
        <button type="button" onClick={postUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div className="subContainer" key={user.id}>
          <div className="infoContainer">
            <p>
              <strong>Nome:</strong> {user.name}
            </p>
            <p>
              <strong>Idade:</strong> {user.age} Anos
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Lixeira" title="Deletar" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
