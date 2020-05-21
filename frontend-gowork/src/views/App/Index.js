import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import Logo from "../../assets/imgs/LogoGOWORK_header-1.png";



function Index(props) {
    const [data, setData] = useState({
        coworking_plan:[],
        office:[],
        client:[],
    })



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
    if(type === 1){
        props.history.push('/editOffice', data)
    }else if(type === 2){
        props.history.push('/editCoworking-plan', data)
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
    <>
    <h2> <img src={Logo} alt="Logo-cowork" /> </h2>
        <div>
            <div>
                <button onClick={() => props.history.push('/editClient')}>Add Cliente</button>
                <button onClick={() => props.history.push('/editCoworking-plan')}>Add Plano de Coworking</button>
                <button onClick={() => props.history.push('/editOffice')}>Add Escritórios</button>
                
            </div>
            <br/><br/>
            <div>
                <h3>Escritórios</h3>
            </div>
            <table>
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
            </table>     
        </div>

        <div>
        <h3>Planos de coworkings</h3>
            <table>
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
            </table>     
        </div>

        <div>
        <h3>Clientes</h3>
            <table>
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
            </table>     
        </div>

        {/* <div>
        <h3>Usuários</h3>
            <table>
                <thead>
                    <tr>
                    <th>Month</th>
                    <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </tbody>
            </table>     
        </div> */}


    </>    
    )
}

export default Index
