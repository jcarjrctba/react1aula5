import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Label from "../../components/Label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("LOGIN");
  const [label, SetLabel] = useState("Oi!");

  const paraHome = () => {
    navigate("/home");
  };

  const mudarTitulo = () => {
    setTitle("Mudou ne kkk");
  };

  let pegarValor = (e) => {
    SetLabel(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <Label text={label} />
        <Title title={title} />
        <Input label="Usuário" passarValor={pegarValor} />
        <Input label="Senha" hideContent />
        <Button button="Entrar" noClique={paraHome} />
        <Button button="Será que muda?" noClique={mudarTitulo} />
        <Link span="Esqueci minha senha" url="https://www.google.com" />
      </div>
    </div>
  );
};

export default Login;
