import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import Logo from "../../assets/imgs/LogoGOWORK_header-1.png";
import ImgAdd from "../../assets/imgs/adicionar.svg";
import './Index.css'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalClient from '../../components/ModalClient'
import ModalCP from '../../components/ModalCP'
import ModalOffice from '../../components/ModalOffice'



function Index(props) {
    const [data, setData] = useState({
        coworking_plan:[],
        office:[],
        client:[],
    })

    const [typeOpen, setTypeOpen] = useState(1)

    const [modalShowClient, setModalShowClient] = useState(false);
    const [modalShowCP, setModalShowCP] = useState(false);
    const [modalShowOffice, setModalShowOffice] = useState(false);

    useEffect(() => {   
        Promise.all([api.get('/office'), api.get('/coworking-plan'), api.get('/client')]).then(function ([p1, p2, p3]) {
            setData({
                coworking_plan:p2.data,
                office:p1.data,
                client:p3.data
            })
        });
    }, [data])

   function handleEdit(data, type) {
    setTypeOpen(0)

    if(type === 1){
        setModalShowClient(true)
        //props.history.push('/editOffice', data)
    }else if(type === 2){
        setModalShowCP(true)
        //props.history.push('/editCoworking-plan', data)
    }else if(type === 3){
        props.history.push('/editClient', data)    
    }
   }

   function handleDelete(data, type){
        if(type === 1){
            api.delete('/office/'+data).then(res=>{console.log(res)})
        }else if(type === 2){
            api.delete('/coworking-plan/'+data).then(res=>{console.log(res)})
        }else if(type === 3){
            api.delete('/client/'+data).then(res=>{console.log(res)})
        }
   }


   

    
    return (
    <div>
            <div id="head">
                <img id="logo" src={Logo} alt="Logo-cowork" />
            </div>
            <div>
                <div id = "divButton">
                    {/* <button className="button" onClick={() => props.history.push('/editClient')}> <img className="add" src={ImgAdd} />  Cliente</button>
                    <button className="button" onClick={() => props.history.push('/editCoworking-plan')}><img className="add" src={ImgAdd} /> Plano de Coworking</button>
                    <button className="button" onClick={() => props.history.push('/editOffice')}><img className="add" src={ImgAdd} /> Escritórios</button> */}

                    <button className="button" onClick={() => setModalShowClient(true)} > <img className="add" src={ImgAdd} />  Cliente</button>
                    <button className="button" onClick={() => setModalShowCP(true)}>      <img className="add" src={ImgAdd} /> Plano de Coworking</button>
                    <button className="button" onClick={() => setModalShowOffice(true)}><img className="add" src={ImgAdd} /> Escritórios</button>

                </div>
            </div>
            <div id="divCenter">
                <div className="pt">
                    <div className="subTitulo">
                        <h2>Escritórios</h2>
                    </div>
                    <div className="divTabela">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Bairro</th>
                                    <th>Número de posições</th>
                                    <th>Estado</th>
                                    <th>Endereço</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.office.map((d, i) => (
                                <tr key={i}>
                                    <td> {d.id} </td>
                                    <td> {d.neighborhood} </td>
                                    <td> {d.number_position} </td>
                                    <td> {d.state} </td>
                                    <td> {d.address} </td>
                                    <td> <button onClick={() => handleEdit(d, 1)} >X</button> </td>
                                    <td> <button onClick={() => handleDelete(d.id, 1) } >X</button> </td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>     
                    </div>
                </div>

                <div className="pt">
                    <div className="subTitulo">
                        <h2>Planos de coworkings</h2>
                    </div>
                    <div className="divTabela">
                    <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Plano</th>
                                    <th>Valor</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.coworking_plan.map((d, i) => (
                                <tr key={i}>
                                    <td> {d.id} </td>
                                    <td> {d.name} </td>
                                    <td> {d.value} </td>
                                    <td> <button onClick={() => handleEdit(d, 2)} >X</button> </td>
                                    <td> <button onClick={() => handleDelete(d.id, 2) }>X</button> </td>
                                </tr>

                                ))}
                            </tbody>
                        </Table>     
                    </div>
                </div>

                <div className="pt">
                    <div className="subTitulo">
                        <h2>Clientes</h2>
                    </div>
                    <div className="divTabela">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>CNPJ / CPF</th>
                                    <th>Registro</th>
                                    <th>Escritório</th>
                                    <th>Plano</th>
                                    <th>Ativo</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.client.map((d, i) => (
                                <tr key={i}>
                                    <td> {d.id} </td>
                                    <td> {d.name} </td>
                                    <td> {d.typeUser} </td>
                                    <td> {d.federal_number} </td>
                                    <td> {d.office_id} </td>
                                    <td> {d.coworking_plan_id} </td>
                                    <td> {d.active} </td>
                                    <td> <button onClick={() => handleEdit(d, 3)} >X</button> </td>
                                    <td> <button onClick={() => handleDelete(d.id, 3) } >X</button> </td>
                                </tr>

                                ))}
                            </tbody>
                        </Table>     
                    </div>
                </div>

            </div>
         

            <ModalClient typeOpen={typeOpen} show={modalShowClient} onHide={() => setModalShowClient(false)}/>
            <ModalCP typeOpen={typeOpen} show={modalShowCP} onHide={() => setModalShowCP(false)}/>
            <ModalOffice typeOpen={typeOpen} show={modalShowOffice} onHide={() => setModalShowOffice(false)}/>


    </div>    
    )
}

export default Index
