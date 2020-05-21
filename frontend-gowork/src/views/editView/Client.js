import React, { useState, useEffect } from 'react'
import api from '../../services/api'

function Client(props) {
    let data = (props.location.state)
    const [nameClient, setNameClient] = useState('')
    const [typeUserClient, settypeUserClient] = useState(0)
    const [federalNumber, setFederalNumber] = useState(0)
    const [activeClient, setActiveClient] = useState(0)
    const [officeId, setOfficeId] = useState(0)
    const [coworkingPlanId, setCoworkingPlanId] = useState(0)


    const [datas, setDatas] = useState({
        dataFull:{
            name:'',
            typeUser:'cnpj',
            federal_number:'',
            office_id:0,
            coworking_plan_id:0,
            active:true
        }
    })

    if (data != null){
        console.log('Dados')
    }else{
        console.log("Não dados")
    }

    useEffect(() => {
        setDatas({
            dataFull:{
                name:nameClient,
                typeUser:typeUserClient,
                federal_number:federalNumber,
                office_id:officeId,
                coworking_plan_id:coworkingPlanId,
                active:activeClient
            }
        })
    }, [nameClient, typeUserClient, federalNumber, officeId, coworkingPlanId, activeClient])

    function saveData(){
        api.post('/client', datas.dataFull).then(res =>console.log(res.status))
        props.history.push('/app')
    }

    
    return (
        <div>
            <div>
                <h2>Clientes</h2>
            </div>

            <div>
                <form>
                    <label>Nome:<br/>
                    <input value={datas.dataFull.name} type="text" onChange={(e) => setNameClient(e.target.value)} /></label>
                    <br/><br/>
                    
                    <label>Tipo de Usuário:<br/>
                    <input value={datas.dataFull.typeUser} type="text" onChange={(e) => settypeUserClient(e.target.value)} /></label>
                    <br/><br/>

                    <label>Número de Inscrição (CNPJ / CPF):<br/>
                    <input value={datas.dataFull.federal_number} type="text" onChange={(e) => setFederalNumber(e.target.value)} /></label>
                    <br/><br/>

                    <label>Escritório:<br/>
                    <input value={datas.dataFull.office_id} type="text" onChange={(e) => setOfficeId(e.target.value)} /></label>
                    <br/><br/>

                    <label>Plano de Coworking:<br/>
                    <input value={datas.dataFull.coworking_plan_id} type="text" onChange={(e) => setCoworkingPlanId(e.target.value)} /></label>
                    <br/><br/>

                    <br/>
                    <button onClick={() => saveData()} >Salvar</button>
                    <button onClick={() => props.history.push('/app')}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default Client
