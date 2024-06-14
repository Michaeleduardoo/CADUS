import "./style.css";
import Trash from "../../assets/icon-lixo.png";

function Home() {
  const users = [
    {
      id: "123456789987654321",
      name: "Michael ",
      age: "22",
      email: "michaeleduardo9018@gmail.com",
    },

    {
      id: "´12345qwertyuio98765432wertyu",
      name: "Ana Souza ",
      age: "20",
      email: "anasouza290704@outlook.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
        <input type="text" name="Nome" placeholder="Nome" required />
        <input type="number" name="Idade" placeholder="Idade" required />
        <input
          type="email"
          placeholder="Email"
          pattern=".+@example\.com"
          required
        />
        <button type="button">Cadastrar</button>
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
          <button>
            <img src={Trash} alt="Lixeira" title="Deletar" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
