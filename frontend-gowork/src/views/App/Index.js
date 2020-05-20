import React, { useState, useEffect } from 'react'
import api from '../../services/api'

function Index() {
    const [data, setData] = useState({
        coworking_plan:[],
        office:[],
        client:[],
    })



    useEffect(() => {
        // api.get('/office').then(res=>{
        //     setData({ office:res.data})
        //     console.log(data.office)
        // })
      
        Promise.all([api.get('/office'), api.get('/coworking-plan'), api.get('/client')]).then(function ([p1, p2, p3]) {
            console.log(p1.data)
            setData({
                coworking_plan:p2.data,
                office:p1.data,
                client:p3.data
            })
        });

    }, [data.updateNow])

   


    
    return (
    <>
    <h2>Gowork</h2>
        <div>
            <h3>Escritórios</h3>
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
                        <td> <button>X</button> </td>
                        <td> <button>X</button> </td>

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
                        <td> <button>X</button> </td>
                        <td> <button>X</button> </td>
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
                        <td> <button>X</button> </td>
                        <td> <button>X</button> </td>

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
