import { useState } from "react";
import Logo from './assets/LogoIFCEMaracanau.png'

export default function App() {

  return(
  <div>
    <header className="header">    
      <div className="logo" style={{
          justifyContent: 'center',
          display: 'flex',
          height: '20vh',
          backgroundColor: '#38A33E'
        }}>
       <img src={Logo} alt="logo" style={{
          height: '230px',
           width: 'auto'
        }}/>
      </div>
    </header> 
      
       <main className="main" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
       }}>

       <div className="painelSuperior" style={{
            backgroundColor: '#38A33E',
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} >
          <h1 id="titulo" style={{
            fontFamily: 'sans-serif',
            height: '30vh',
            marginTop: '2vh',
            color: '#fff',
            textAling: 'center',
            fontSize: '4vh'
          }}>
            Título </h1>
          <h2 id="subtitulo" style={{
            fontFamily: "'Open sans' sans-serif",
            color: "#fff",
            fontSize: '3vh',
            textAlign: 'center',
            marginTop: '1%'
          }}>
            Subtítulo </h2>
        </div>

          <div className="caixaDeEntrada" style={{
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'colum',
            backgroundColor: '#ffffff',
            width: '30%',
            height: '20vh',
            gap: '3px',
            position: 'relative',
            zIndex: '2',
            transform: 'translateY(-40%)'

          }}>
            <label id="campoEntrada" for="Usuario">
              <span id="PlUsuario">Usuário</span>
              <input type="text" placeholder="Digite o nome de seu usuário" id="entradaUsuario" style={{
                marginLeft: '10%',
                width: '80%',
                height: '3vh',
                alignSelf: 'center'
              }}></input>
          </label>

          <label className="campoEntrada" for="senha" style={{
            marginLeft: '10%',
            width: '80%',
            height: '3vh',
            alignSelf: 'center'
          }}>
            <span id="PlSenha">Senha</span>
            <input type="password" placeholder="Digite sua senha" id="entradaSenha"></input>
          </label>

          </div>



      </main>

    </div>
  );
}