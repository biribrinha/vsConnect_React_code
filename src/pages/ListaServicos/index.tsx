import "./style.css";

//components

import CardServicos from "../../components/cardServicos";

//hooks
import { useEffect, useState } from "react";

//importando a api
import api from "../../utils/api";

function ListaServicos() {

    const [servicos, setServicos] = useState<any[]>([]);


    function listarServicos() {

        api.get("servicos")
            .then((response: any) => {

                setServicos(response.data)

            })


            .catch((error: any) => {

                console.log("Erro ao realizar uma requisicao de servicos: ", error);

            })
    }


    useEffect(() => {




        listarServicos();

    }, [])

    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">

                            {/* COLOCANDO DADOS DA API */}


                            <ul>
                                {
                                    servicos.map((servicos: any, indice: number) => {

                                        return <li key={indice} >

                                            <CardServicos
                                                id={servicos.id}
                                                nome={servicos.nome}
                                                descricao={servicos.descricao}
                                                valor={servicos.valor}
                                                listaTechs={servicos.techs}
                                            />



                                        </li>
                                    })
                                }

                            </ul>

                            {/* COLOCANDO DADOS DA API */}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;