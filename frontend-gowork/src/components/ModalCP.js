import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalCP(props) {
    //let data = (props.location.state)
    const [nameCP, setNameCP] = useState('')
    const [valueCP, setValueCP] = useState()
    
    const [up, setUp]=useState(0)

    useEffect(() => {
        if(props.dataEdit){
            if(up === 0){
              setNameCP(props.dataEdit.name)
              setValueCP(props.dataEdit.value)
            }
            setUp(1)
          }
    }, [up, props.dataEdit])


    function saveData(){
        if(props.dataEdit){
            api.patch('/coworking-plan/'+props.dataEdit.id, {
                name:nameCP,
                value:valueCP
            }).then(res =>console.log(res.status))
        
        }else{
            api.post('/coworking-plan', {
                name:nameCP,
                value:valueCP
            }).then(res =>console.log(res.status))
    
        }
        setNameCP('')
        setValueCP(0)
        setUp(0)
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
          {props.typeOpen === 1? "Adicionar Plano": "Editar Plano"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col>
                    <label>Nome do Plano:<br/>
                    <input value={nameCP} type="text" onChange={(e) => setNameCP(e.target.value)} /></label>
                </Col>
                <Col>
                    <label>Valor:<br/>
                    <input value={valueCP} type="number" onChange={(e) => setValueCP(e.target.value)} /></label>
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

export default ModalCP
