 import { useState } from "react";

import "./assets/Login.css";

import LogoIFCE from "./assets/LogoIFCEMaracanau.png";
import OlhoFechado from "./assets/Olho-fechado.png";
import OlhoAberto from "./assets/Olho-aberto.png";


function App() {


    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const [mostrarSenha, setMostrarSenha] = useState(false);



    function validarLogin() {


        if (usuario.trim() === "") {

            alert("ERROR: Campo Usuário vazio");

        } 
        
        else if (senha.trim() === "") {

            alert("ERROR: Campo senha vazio");

        } 
        
        else {

            alert("Login enviado com sucesso!");

        }


    }





    return (

        <>


            <header className="header">


                <div id="logo">


                    <img
                        src={LogoIFCE}
                        alt="Logo IF"
                        id="imagem"
                    />


                </div>





                <div id="painelSuperior">


                    <h1 id="titulo">
                        Sistema de Estágio e Jovem Aprendiz
                    </h1>



                    <h2 id="subTitulo">
                        Digite seu usuário e senha para obter acesso
                    </h2>



                </div>



            </header>







            <main className="main">


                <div id="caixaDeEntrada">



                    <span id="PlUsuario">
                        Usuário
                    </span>




                    <div className="campo">


                        <input
                            type="text"
                            id="usuario"
                            placeholder="Digite seu nome"

                            value={usuario}

                            onChange={(e) => setUsuario(e.target.value)}
                        />


                    </div>






                    <span id="PlSenha">
                        Senha
                    </span>







                    <div className="campo">



                        <input

                            type={mostrarSenha ? "text" : "password"}

                            id="senha"

                            placeholder="Digite sua senha"


                            value={senha}

                            onChange={(e) => setSenha(e.target.value)}

                        />






                        <button

                            type="button"

                            id="mostrarSenha"

                            onClick={() => setMostrarSenha(!mostrarSenha)}

                        >



                            <img

                                src={mostrarSenha ? OlhoAberto : OlhoFechado}

                                id="iconeOlho"

                                alt="Mostrar senha"

                            />



                        </button>





                    </div>









                    <button

                        id="botao"

                        onClick={validarLogin}

                    >

                        Enviar


                    </button>







                </div>



            </main>







            <footer className="footer">


            </footer>




        </>

    );


}



export default App;