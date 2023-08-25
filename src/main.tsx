import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import ListaDevs from "./pages/ListaDevs";
import Footer from "./components/Footer"
import Header from './components/Header';
import Login from './pages/Login';
import VisualizarServico from './pages/VisualizarServico';
import Perfil from './pages/PerfilUsuario';
import CadastroServico from './pages/CadastroServico';


//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorage from "react-secure-storage";



function logado() {

  if (secureLocalStorage.getItem("user")) {

    const objetoUsuario: any = secureLocalStorage.getItem("user");

    // DEIXAR SO APARECER O PRIMEIRO NOME
    const nome:string =  objetoUsuario.user.nome.trim().split(" ")[0]
    
    return { logado: true , nomeUsuario: nome}

  } else{

    return { logado: false , nomeUsuario: null}

  }

}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header usuario={ logado() }/>
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='lista/servicos' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs />} />

        {/* se coloca um paremetro com : e o nome dele */}

        <Route path='perfil/:idUsuario' element={<Perfil />} />

        <Route path='servico/:idServico' element={<VisualizarServico />} />

        <Route path='login' element={<Login />} />

        <Route path='cadastro/servico' element={<CadastroServico />} />



      </Routes>


      <Footer />


    </BrowserRouter>
  </React.StrictMode>
)