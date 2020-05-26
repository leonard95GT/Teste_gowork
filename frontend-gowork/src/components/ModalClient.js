import React, { useState, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import api from '../services/api'

function ModalClient(props) {

  const [nameClient, setNameClient] = useState('')
  const [typeUserClient, settypeUserClient] = useState('cnpj')
  const [federalNumber, setFederalNumber] = useState()
  const [officeId, setOfficeId] = useState(0)
  const [coworkingPlanId, setCoworkingPlanId] = useState(0)

  const [CoworkingPlan, setCoworkingPlan] = useState({
    data:[]
  })
  const [Office, setOffice] = useState({
    data:[]
  })

  

  const [up, setUp]=useState(0)
  const [upTwo, setUpTwo]=useState(0)



  function saveData(){
    if(nameClient === ''){
      alert('Preencha todos os campos para continuar')
    }

    if(props.dataEdit){
      api.patch('/client/'+props.dataEdit.id, {
        name:nameClient,
        typeUser:typeUserClient,
        federal_number:federalNumber,
        office_id:officeId,
        coworking_plan_id:coworkingPlanId,
      }).then(res =>console.log(res.status))
      setUpTwo(0)
      console.log('tem q mudar aqui' + upTwo)
      
    }else{
      console.log(officeId)
      api.post('/client', {
        name:nameClient,
        typeUser:typeUserClient,
        federal_number:federalNumber,
        office_id:officeId,
        coworking_plan_id:coworkingPlanId,
      }).then(res =>console.log(res.status))
  
    }   
    setNameClient('')
    setFederalNumber('')
    setOfficeId(0)
    setCoworkingPlanId(0)
    setUpTwo(0)
    console.log(upTwo)  
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

    if(props.dataEdit){
      console.log(props.dataEdit)
      //console.log(upTwo)
      if(upTwo === 0){
        console.log('funcionou')
        setNameClient(props.dataEdit.name)
        setFederalNumber(props.dataEdit.federal_number)
        setOfficeId(props.dataEdit.office_id)
        setCoworkingPlanId(props.dataEdit.coworking_plan_id)
      }
      setUpTwo(1)
    }
    
  }, [up, upTwo, props.dataEdit])


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
          <Col sm={4}>
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
          <Col sm={4}>
            <label>CNPJ / CPF:<br/>
            <input value={federalNumber} type="number" onChange={(e) => setFederalNumber(e.target.value)} /></label>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <label>Escritório:<br/>
              <select value={officeId} onChange={(e) => setOfficeId(e.target.value)}>
                {Office.data.map((d, i) => (
                  <option key={i} value={d.id}>{d.neighborhood}</option>
                ))}
              </select>            

            </label>

          </Col>

          <Col sm={4}>
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
