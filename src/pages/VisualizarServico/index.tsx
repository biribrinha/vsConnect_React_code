//estilização
import "./style.css";

import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import { useEffect, useState } from "react";


function VisualizarServico() {


    const { idServico } = useParams();
    const [nome, setNome] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [techs, setTechs] = useState<string[]>([]);



    function buscarServicoPorId() {

        api.get("/servicos/" + idServico)
            .then((response: any) => {
                setNome(response.data.nome);
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setTechs(response.data.techs);
            })

            .catch((error: any) => {

                console.log(error)

            }
            )
    }

    useEffect(() => {

        buscarServicoPorId();
    }, [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>Desenvolvimento de site institucional - {nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            techs.map((tech: string, index: number) => {

                                return <span key={index}>{tech}</span>

                            })
                        }

                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;