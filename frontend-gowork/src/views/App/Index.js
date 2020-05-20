import React, { useState, useEffect } from 'react'
import api from '../../services/api'

function Index() {
    const [data, setData] = useState({
        coworking_plan:[],
        office:[],
        client:[],
        updateNow:1
    })

    useEffect(() => {
        if(data.updateNow === 1){
            api.get('/office').then(res=>{
                setData({
                    office:res.data
                })
            })

            api.get('/client').then(res=>{
                setData({
                    client:res.data
                })
            })

            api.get('/coworking-plan').then(res=>{
                setData({
                    coworking_plan:res.data
                })
            })

        }
    })

    return (
    <>
        <div>
            <table>
                <tr>
                    <th>Escritórios</th>
                </tr>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
            </table>                    
        </div>

        <div>
            <table id="a">
                <thead>
                    <tr>
                        <th>Usuários</th>
                    </tr>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>                    
        </div>

        <div>
            <table id="b">
                <thead>
                    <tr>
                        <th>Usuários</th>
                    </tr>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>                    
        </div>

        <div>
            <table id="c">
                <thead>
                    <tr>
                        <th>Usuários</th>
                    </tr>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>                    
        </div>

        <button onClick={()=>console.log(data.client)} >Olá</button>

    </>    
    )
}

export default Index
