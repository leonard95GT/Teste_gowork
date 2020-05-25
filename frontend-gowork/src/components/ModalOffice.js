import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalOffice(props) {
    const [neigthborhoodOffice, setNeigthborhoodOffice] = useState('')
    const [stateOffice, setStateOffice] = useState('')
    const [addressOffice, setAddressOffice] = useState('')
    const [numberPositionOffice, setNumberPositionOffice] = useState('')
    const [up, setUp] = useState(0)
    
    useEffect(() => {
      if(props.dataEdit){
        if(up === 0){
          //console.log(props.dataEdit)
          setNeigthborhoodOffice(props.dataEdit.neighborhood)
          setStateOffice(props.dataEdit.state)
          setAddressOffice(props.dataEdit.address)
          setNumberPositionOffice(props.dataEdit.number_position)
        }
        setUp(1)
      }
    }, [up, props.dataEdit])


    function saveData(){
      if(props.dataEdit){
        api.patch('/office/'+props.dataEdit.id, {
          neighborhood:neigthborhoodOffice,
          state:stateOffice,
          number_position:numberPositionOffice,
          address:addressOffice
        }).then(res =>console.log(res.status))

      }else{
        api.post('/office', {
          neighborhood:neigthborhoodOffice,
          state:stateOffice,
          number_position:numberPositionOffice,
          address:addressOffice
        }).then(res =>console.log(res.status))
      }
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
                <input value={neigthborhoodOffice} type="text" onChange={(event) => setNeigthborhoodOffice(event.target.value)} /></label>
              </Col>
              <Col>
                <label>Estado:<br/>
                <input value={stateOffice} type="text" onChange={(event) => setStateOffice(event.target.value)} /></label>
              </Col>
          </Row>
          <Row>
              <Col>
                <label>Posições no coworking:<br/>
                <input value={numberPositionOffice} type="number" onChange={(event) => setNumberPositionOffice(event.target.value)} /></label>
              </Col>
              <Col>
                <label>Enderço:<br/>
                <input value={addressOffice} type="text" onChange={(event) => setAddressOffice(event.target.value)} /></label>
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
