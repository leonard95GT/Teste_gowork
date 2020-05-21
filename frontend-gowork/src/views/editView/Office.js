import React, { useState, useEffect } from 'react'
import api from '../../services/api'

function Office(props) {
    let data = (props.location.state)
    const [nameOffice, setNameOffice] = useState('')
    const [neigthborhoodOffice, setNeigthborhoodOffice] = useState('')
    const [stateOffice, setStateOffice] = useState('')
    const [addressOffice, setAddressOffice] = useState('')
    const [numberPositionOffice, setNumberPositionOffice] = useState('')

    const [datas, setDatas] = useState({
        dataFull:{
            neighborhood:'',
            state:'',
            number_position:0,
            address:''
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
                neighborhood:neigthborhoodOffice,
                state:stateOffice,
                number_position:numberPositionOffice,
                address:addressOffice
            }
        })
    }, [nameOffice, neigthborhoodOffice, stateOffice, numberPositionOffice, addressOffice])

    function saveDataOffice(){
        api.post('/office', datas.dataFull).then(res =>console.log(res.status))
        props.history.push('/app')
    }


    return (
    <div>
        <div>
            <h2>Escritório</h2>
        </div>

        <div>
            
                <label>Bairro:<br/>
                <input value={datas.dataFull.neighborhood} type="text" onChange={(event) => setNeigthborhoodOffice(event.target.value)} /></label>
                <br/><br/>

                <label>Estado:<br/>
                <input value={datas.dataFull.state} type="text" onChange={(event) => setStateOffice(event.target.value)} /></label>
                <br/><br/>

                <label>Posições no coworking:<br/>
                <input value={datas.dataFull.number_position} type="number" onChange={(event) => setNumberPositionOffice(event.target.value)} /></label>
                <br/><br/>

                <label>Enderço:<br/>
                <input value={datas.dataFull.address} type="text" onChange={(event) => setAddressOffice(event.target.value)} /></label>
                <br/><br/>


                <br/>
                <button onClick={() => saveDataOffice()} >Salvar</button>
                <button onClick={() => props.history.push('/app')}>Cancelar</button>
            
        </div>
    </div>
    )
}

export default Office
