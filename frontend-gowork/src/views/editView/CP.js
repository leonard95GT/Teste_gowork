import React, { useState, useEffect } from 'react'
import api from '../../services/api'


function CP(props) {
    let data = (props.location.state)
    const [nameCP, setNameCP] = useState('')
    const [valueCP, setValueCP] = useState(0)


    const [datas, setDatas] = useState({
        dataFull:{
            name:'',
            value:0
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
                name:nameCP,
                value:valueCP
                }
        })
    }, [nameCP, valueCP])


    function saveData(){
        api.post('/coworking-plan', datas.dataFull).then(res =>console.log(res.status))
        props.history.push('/app')
    }


    return (
    <div>
        <div>
            <h2>Planos de Coworking</h2>
        </div>

        <div>
            <form>
                <label>Nome do Plano:<br/>
                <input value={datas.dataFull.name} type="text" onChange={(e) => setNameCP(e.target.value)} /></label>
                <br/><br/>

                <label>Valor:<br/>
                <input value={datas.dataFull.value} type="number" onChange={(e) => setValueCP(e.target.value)} /></label>
                <br/><br/>
                
                <br/>
                <button onClick={() => saveData()} >Salvar</button>
                <button onClick={() => props.history.push('/app')}>Cancelar</button>
            </form>
        </div>
    </div>
    )
}

export default CP
