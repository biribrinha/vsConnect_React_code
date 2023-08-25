
import { Link } from "react-router-dom";

function cardServicos(props: any) {

    return (
        <div className="wrapper_lista">
            <li>
                <div className="servico">
                    <div className="topo_servico">
                        <Link to={'/servico/' + props.id}>

                            <h3>{props.nome}</h3>
                            
                        </Link>
                        <span>R$ {props.valor}</span>
                    </div>
                    <p>{props.descricao}</p>
                    <div className="techs_servicos">
                        {
                            props.listaTechs.map((techs: string, indice: number) => {

                                return <span key={indice}>{techs}</span>
                            })
                        }
                    </div>
                </div>
            </li>
        </div>


    );

}


export default cardServicos;