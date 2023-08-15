

function cardServicos(props: any) {

    return (
        <div className="wrapper_lista">
            <li>
                <div className="servico">
                    <div className="topo_servico">
                        <h3>{props.titulo}</h3>
                        <span>R$ {props.proposta}</span>
                    </div>
                    <p>{props.descricao}</p>
                    <div className="techs_servicos">
                        {
                            props.listaTechs.map((tech: string, indice: number) => {

                                return <span key={indice}>{tech}</span>
                            })
                        }
                    </div>
                </div>
            </li>
        </div>


    );

}


export default cardServicos;