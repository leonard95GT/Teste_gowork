import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalClient(props) {

  const [nameClient, setNameClient] = useState(props.dataEdit.name)
  const [typeUserClient, settypeUserClient] = useState('cnpj')
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

  function saveData(){
    api.post('/client', {
      name:nameClient,
      typeUser:typeUserClient,
      federal_number:federalNumber,
      office_id:officeId,
      coworking_plan_id:coworkingPlanId,
    }).then(res =>console.log(res.status))
   
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
    }
    
  }, [props.show,nameClient, typeUserClient, federalNumber, officeId, coworkingPlanId, Office, CoworkingPlan, props.edit, up])


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
            <input value={nameClient} type="text" onChange={(e) => setNameClient(e.target.value)} /></label>
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
            <input value={federalNumber} type="text" onChange={(e) => setFederalNumber(e.target.value)} /></label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Escritório:<br/>
              <select value={officeId} onChange={(e) => setOfficeId(e.target.value)}>
                {Office.data.map((d, i) => (
                  <option key={i} value={d.id}>{d.neighborhood}</option>
                ))}
              </select>            

            </label>

          </Col>

          <Col>
            <label>Plano de Coworking:<br/>
              <select value={coworkingPlanId} onChange={(e) => setCoworkingPlanId(e.target.value)}>
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
