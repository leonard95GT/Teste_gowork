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


    function saveData(){
        api.post('/office', datas.dataFull).then(res =>console.log(res.status))
        setNeigthborhoodOffice('')
        setStateOffice('')
        setAddressOffice('')
        setNumberPositionOffice(0)
        props.onHide()
    }


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.typeOpen === 1? "Adicionar Escritório": "Editar Escritório"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Row>
              <Col>
                <label>Bairro:<br/>
                <input value={datas.dataFull.neighborhood} type="text" onChange={(event) => setNeigthborhoodOffice(event.target.value)} /></label>
              </Col>
              <Col>
                <label>Estado:<br/>
                <input value={datas.dataFull.state} type="text" onChange={(event) => setStateOffice(event.target.value)} /></label>
              </Col>
          </Row>
          <Row>
              <Col>
                <label>Posições no coworking:<br/>
                <input value={datas.dataFull.number_position} type="number" onChange={(event) => setNumberPositionOffice(event.target.value)} /></label>
              </Col>
              <Col>
                <label>Enderço:<br/>
                <input value={datas.dataFull.address} type="text" onChange={(event) => setAddressOffice(event.target.value)} /></label>
              </Col>
          </Row>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => saveData()}>Salvar</Button>
        <Button onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default ModalOffice
