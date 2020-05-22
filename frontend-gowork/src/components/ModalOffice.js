import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalOffice(props) {
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

    useEffect(() => {
        setDatas({
            dataFull:{
                neighborhood:neigthborhoodOffice,
                state:stateOffice,
                number_position:numberPositionOffice,
                address:addressOffice
            }
        })
    }, [neigthborhoodOffice, stateOffice, numberPositionOffice, addressOffice])


    return (
        <div>
            
        </div>
    )
}

export default ModalOffice
