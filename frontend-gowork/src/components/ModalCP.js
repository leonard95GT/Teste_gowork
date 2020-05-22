import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalCP(props) {
    //let data = (props.location.state)
    const [nameCP, setNameCP] = useState('')
    const [valueCP, setValueCP] = useState(0)


    const [datas, setDatas] = useState({
        dataFull:{
            name:'',
            value:0
        }
    })

    // if (data != null){
    //     console.log('Dados')
    // }else{
    //     console.log("Não dados")
    // }

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
        setNameCP('')
        setValueCP(0)
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
                    <input value={datas.dataFull.name} type="text" onChange={(e) => setNameCP(e.target.value)} /></label>
                </Col>
                <Col>
                    <label>Valor:<br/>
                    <input value={datas.dataFull.value} type="number" onChange={(e) => setValueCP(e.target.value)} /></label>
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
