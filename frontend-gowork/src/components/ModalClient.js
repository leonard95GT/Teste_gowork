import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalClient(props) {

  const [nameClient, setNameClient] = useState('')
  const [typeUserClient, settypeUserClient] = useState(0)
  const [federalNumber, setFederalNumber] = useState(0)
  const [officeId, setOfficeId] = useState(0)
  const [coworkingPlanId, setCoworkingPlanId] = useState(0)

  const [CoworkingPlan, setCoworkingPlan] = useState({
    data:[]
  })
  const [Office, setOffice] = useState({
    data:[]
  })

  const [up, setUp]=useState(0)

  let a = []
  let b = []

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

  

  function saveData(){
    api.post('/client', datas.dataFull).then(res =>console.log(res.status))
    setDatas({
      dataFull:{
        name:'',
        typeUser:'cnpj',
        federal_number:'',
        office_id:0,
        coworking_plan_id:0,
        active:true
      }
    })
    setNameClient('')
    setFederalNumber('')
    setOfficeId(0)
    setCoworkingPlanId(0)
    props.onHide()
  }
  
  useEffect(() => {
    if(up === 0){
        api.get('/office').then(res => {
          setOffice({
            data:res.data
          })
        })

        api.get('/coworking-plan').then(res => {
          setCoworkingPlan({
            data:res.data
          })
       })

        setUp(1)
        console.log(a)
    }

    if(props.show === false){
           
    }

    setDatas({
        dataFull:{
            name:nameClient,
            typeUser:typeUserClient,
            federal_number:federalNumber,
            office_id:officeId,
            coworking_plan_id:coworkingPlanId,
        }
    })
  }, [props.show,nameClient, typeUserClient, federalNumber, officeId, coworkingPlanId, Office, CoworkingPlan])


    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.typeOpen === 1? "Adicionar Cliente": "Editar Cliente"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <label>Nome:<br/>
            <input value={datas.dataFull.name} type="text" onChange={(e) => setNameClient(e.target.value)} /></label>
          </Col>
          <Col>
            <label>Tipo de Usuário:<br/>
              <select onChange={(e) => settypeUserClient(e.target.value)}>
                <option value="cnpj">CNPJ</option>
                <option value="cpf">CPF</option>
              </select>            
            </label>

          </Col>
          <Col>
            <label>Número de Inscrição (CNPJ / CPF):<br/>
            <input value={datas.dataFull.federal_number} type="text" onChange={(e) => setFederalNumber(e.target.value)} /></label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Escritório:<br/>
              <select onChange={(e) => setOfficeId(e.target.value)}>
                {Office.data.map((d, i) => (
                  <option key={i} value={d.id}>{d.neighborhood}</option>
                ))}
              </select>            

            </label>

          </Col>

          <Col>
            <label>Plano de Coworking:<br/>
              <select onChange={(e) => setCoworkingPlanId(e.target.value)}>
                {CoworkingPlan.data.map((d, i) => (
                  <option key={i} value={d.id}>{d.name}</option>
                ))}
              </select>            
            </label>
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

export default ModalClient
